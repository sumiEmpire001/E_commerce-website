import {products,money,filterProducts,addItem,setItemQuantity,cartTotals,sanitizeCart} from "./catalog.mjs";
const $=id=>document.getElementById(id);
const key="anempire_demo_cart_v1";
let cart={};
try{cart=sanitizeCart(JSON.parse(localStorage.getItem(key)||"{}"),products);}catch{cart={};}
const announce=message=>{$("announcer").textContent=message;};
function persist(){try{localStorage.setItem(key,JSON.stringify(cart));}catch{announce("Cart saved for this page only; browser storage is unavailable.");}}
function card(product){
  const article=document.createElement("article");article.className="product-card";
  const art=document.createElement("div");art.className="product-art";art.textContent=product.emoji;art.setAttribute("aria-hidden","true");
  const body=document.createElement("div");body.className="product-body";
  const cat=document.createElement("span");cat.className="product-category";cat.textContent=product.category;
  const title=document.createElement("h3");title.textContent=product.name;
  const desc=document.createElement("p");desc.textContent=product.description;
  const bottom=document.createElement("div");bottom.className="product-bottom";
  const price=document.createElement("strong");price.textContent=money(product.price);
  const button=document.createElement("button");button.type="button";button.className="add-button";
  const available=product.stock-(cart[product.id]||0);
  button.textContent=product.stock===0?"Sold out":available===0?"Max in cart":"Add to cart";
  button.disabled=available===0;
  button.addEventListener("click",()=>{try{cart=addItem(cart,product);persist();render();announce(product.name+" added to cart.");}catch(error){announce(error.message);}});
  bottom.append(price,button);body.append(cat,title,desc,bottom);article.append(art,body);return article;
}
function renderProducts(){
  const filtered=filterProducts(products,{search:$("search").value,category:$("category").value});
  $("product-grid").replaceChildren(...filtered.map(card));$("empty").hidden=filtered.length>0;
}
function renderCart(){
  const totals=cartTotals(cart,products);$("cart-count").textContent=String(totals.quantity);$("subtotal").textContent=money(totals.subtotal);
  const items=products.filter(p=>cart[p.id]);const root=$("cart-items");root.replaceChildren();
  if(!items.length){const p=document.createElement("p");p.textContent="Your cart is empty. Explore the collection to get started.";root.append(p);return;}
  for(const p of items){
    const row=document.createElement("div");row.className="cart-row";
    const info=document.createElement("div");const name=document.createElement("strong");name.textContent=p.name;
    const price=document.createElement("small");price.textContent=money(p.price)+" each";
    info.append(name,price);
    const controls=document.createElement("div");
    const minus=document.createElement("button");minus.type="button";minus.textContent="−";minus.setAttribute("aria-label","Remove one "+p.name);
    const count=document.createElement("span");count.textContent=String(cart[p.id]);
    const plus=document.createElement("button");plus.type="button";plus.textContent="+";plus.disabled=cart[p.id]>=p.stock;plus.setAttribute("aria-label","Add one "+p.name);
    const change=delta=>{cart=setItemQuantity(cart,p,cart[p.id]+delta);persist();render();announce("Cart updated.");};
    minus.addEventListener("click",()=>change(-1));plus.addEventListener("click",()=>change(1));
    controls.append(minus,count,plus);row.append(info,controls);root.append(row);
  }
}
function render(){renderProducts();renderCart();}
function toggleCart(open){$("cart-panel").hidden=!open;$("cart-toggle").setAttribute("aria-expanded",String(open));if(open)$("cart-close").focus();else $("cart-toggle").focus();}
$("search").addEventListener("input",renderProducts);$("category").addEventListener("change",renderProducts);
$("cart-toggle").addEventListener("click",()=>toggleCart($("cart-panel").hidden));
$("cart-close").addEventListener("click",()=>toggleCart(false));
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&!$("cart-panel").hidden)toggleCart(false);});
$("year").textContent=String(new Date().getFullYear());render();
