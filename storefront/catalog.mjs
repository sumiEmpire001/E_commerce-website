export const products = Object.freeze([
  {id:"bag-01",name:"Everyday Canvas Tote",category:"Fashion",price:12500,stock:12,emoji:"👜",description:"Reusable carryall for school and everyday errands."},
  {id:"audio-01",name:"Wireless Headphones",category:"Electronics",price:38500,stock:8,emoji:"🎧",description:"Comfortable wireless listening for work and study."},
  {id:"home-01",name:"Ceramic Coffee Mug",category:"Home",price:6500,stock:20,emoji:"☕",description:"A sturdy mug for your morning routine."},
  {id:"tech-01",name:"Laptop Stand",category:"Electronics",price:22000,stock:5,emoji:"💻",description:"Raise your laptop for a cleaner workspace."},
  {id:"style-01",name:"Classic Wristwatch",category:"Fashion",price:28000,stock:0,emoji:"⌚",description:"Minimalist style with an everyday fit."},
  {id:"home-02",name:"Desk Lamp",category:"Home",price:17500,stock:10,emoji:"💡",description:"Focused lighting for your desk."}
]);
export function money(amount){return new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",maximumFractionDigits:0}).format(amount);}
export function filterProducts(items,{search="",category="All"}={}){
  const term=String(search).trim().toLocaleLowerCase();
  return items.filter(p=>(category==="All"||p.category===category)&&(!term||[p.name,p.category,p.description].join(" ").toLocaleLowerCase().includes(term)));
}
export function addItem(cart,product,quantity=1){
  if(!product||!Number.isInteger(quantity)||quantity<1)throw new Error("Invalid product or quantity");
  const current=cart[product.id]||0;
  if(current+quantity>product.stock)throw new Error("Not enough stock available");
  return {...cart,[product.id]:current+quantity};
}
export function setItemQuantity(cart,product,quantity){
  if(!product||!Number.isInteger(quantity)||quantity<0||quantity>product.stock)throw new Error("Invalid cart quantity");
  const next={...cart};if(quantity===0)delete next[product.id];else next[product.id]=quantity;return next;
}
export function cartTotals(cart,items){
  let quantity=0,subtotal=0;
  for(const [id,count] of Object.entries(cart)){
    const p=items.find(x=>x.id===id);
    if(!p||!Number.isInteger(count)||count<1||count>p.stock)continue;
    quantity+=count;subtotal+=p.price*count;
  }
  return {quantity,subtotal};
}
export function sanitizeCart(raw,items){
  if(!raw||typeof raw!=="object"||Array.isArray(raw))return {};
  const clean={};
  for(const p of items){const q=raw[p.id];if(Number.isInteger(q)&&q>0&&p.stock>0)clean[p.id]=Math.min(q,p.stock);}
  return clean;
}
