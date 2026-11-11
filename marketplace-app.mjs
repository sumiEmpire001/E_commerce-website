import {products,naira,addToCart,cleanCart,total} from "./marketplace-data.mjs";
const list=document.getElementById("product-list"),category=document.getElementById("category-filter"),search=document.getElementById("product-search"),cartList=document.getElementById("cart-items"),cartTotal=document.getElementById("cart-total"),notice=document.getElementById("marketplace-status");
const key="anempire-original-demo-cart-v1";
let cart={};
try{cart=cleanCart(JSON.parse(localStorage.getItem(key)||"{}"));}catch{cart={};}
function save(){try{localStorage.setItem(key,JSON.stringify(cart));}catch{notice.textContent="Cart cannot be saved on this device.";}}
function element(tag,cls,value){const el=document.createElement(tag);if(cls)el.className=cls;if(value!==undefined)el.textContent=value;return el;}
function renderProducts(){
 list.replaceChildren();
 const query=search.value.trim().toLowerCase(),selected=category.value;
 const shown=products.filter(p=>(selected==="All"||p.category===selected)&&p.name.toLowerCase().includes(query));
 if(!shown.length){list.append(element("p","col-12","No products match your search."));return;}
 for(const p of shown){
  const col=element("div","col-sm-6 col-xl-4 mb-3"),card=element("article","card h-100"),body=element("div","card-body");
  const icon=element("div","display-4 mb-2",p.icon);icon.setAttribute("aria-hidden","true");
  const name=element("h3","h5",p.name),meta=element("p","text-muted",p.category),price=element("p","font-weight-bold",naira(p.price));
  const btn=element("button","btn btn-primary",p.stock?"Add to cart":"Sold out");
  btn.type="button";btn.disabled=!p.stock;btn.addEventListener("click",()=>{cart=addToCart(cart,p.id);save();renderCart();notice.textContent=p.name+" added to demo cart.";});
  body.append(icon,name,meta,price,btn);card.append(body);col.append(card);list.append(col);
 }
}
function renderCart(){
 cartList.replaceChildren();let count=0;
 for(const p of products){
  const qty=cart[p.id]||0;if(!qty)continue;count+=qty;
  const row=element("li","list-group-item d-flex justify-content-between align-items-center");
  const label=element("span","",p.name+" × "+qty+" — "+naira(p.price*qty));
  const controls=element("span","ml-2");
  const minus=element("button","btn btn-sm btn-outline-secondary mr-1","−"),plus=element("button","btn btn-sm btn-outline-secondary mr-1","+"),remove=element("button","btn btn-sm btn-outline-danger","Remove");
  for(const b of [minus,plus,remove])b.type="button";
  minus.setAttribute("aria-label","Decrease "+p.name);plus.setAttribute("aria-label","Increase "+p.name);remove.setAttribute("aria-label","Remove "+p.name);
  plus.disabled=qty>=p.stock;
  minus.addEventListener("click",()=>change(p.id,qty-1));plus.addEventListener("click",()=>change(p.id,qty+1));remove.addEventListener("click",()=>change(p.id,0));
  controls.append(minus,plus,remove);row.append(label,controls);cartList.append(row);
 }
 if(!count)cartList.append(element("li","list-group-item","Your demo cart is empty."));
 cartTotal.textContent=naira(total(cart));document.getElementById("cart-count").textContent=String(count);
}
function change(id,qty){if(qty<=0)delete cart[id];else cart[id]=Math.min(qty,products.find(p=>p.id===id).stock);save();renderCart();}
category.addEventListener("change",renderProducts);search.addEventListener("input",renderProducts);
renderProducts();renderCart();
