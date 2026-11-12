export const products = Object.freeze([
  {id:"a1",name:"Wireless Headphones",category:"Electronics",price:18500,stock:8,icon:"🎧"},
  {id:"a2",name:"Portable Power Bank",category:"Electronics",price:14500,stock:12,icon:"🔋"},
  {id:"a3",name:"Canvas Tote Bag",category:"Fashion",price:8500,stock:15,icon:"👜"},
  {id:"a4",name:"Everyday Sneakers",category:"Fashion",price:27500,stock:6,icon:"👟"},
  {id:"a5",name:"Desk Organizer",category:"Home & Kitchen",price:6500,stock:10,icon:"🗂️"},
  {id:"a6",name:"Notebook Set",category:"Books",price:4200,stock:20,icon:"📚"},
  {id:"a7",name:"Building Blocks",category:"Toys & Games",price:12000,stock:0,icon:"🧱"}
]);
export const naira = amount => new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",maximumFractionDigits:0}).format(amount);
export function addToCart(cart,id) {
  const product=products.find(p=>p.id===id);
  if(!product || product.stock===0) return cart;
  const next={...cart};
  next[id]=Math.min(product.stock,(Number.isSafeInteger(next[id])&&next[id]>0?next[id]:0)+1);
  return next;
}
export function cleanCart(cart) {
  const result={};
  if(!cart || typeof cart!=="object" || Array.isArray(cart)) return result;
  for(const p of products){
    const n=cart[p.id];
    if(Number.isSafeInteger(n)&&n>0&&p.stock>0) result[p.id]=Math.min(n,p.stock);
  }
  return result;
}
export function total(cart){return products.reduce((sum,p)=>sum+(cart[p.id]||0)*p.price,0);}

export const sortModes=Object.freeze(["featured","price-low","price-high","name"]);
export function filterProducts(items,{query="",category="All",sort="featured",inStock=false}={}){
 const needle=String(query).trim().toLowerCase();
 const filtered=items.filter(p=>(category==="All"||p.category===category)&&(!inStock||p.stock>0)&&
  (p.name.toLowerCase().includes(needle)||p.category.toLowerCase().includes(needle)));
 if(sort==="price-low")filtered.sort((a,b)=>a.price-b.price);
 else if(sort==="price-high")filtered.sort((a,b)=>b.price-a.price);
 else if(sort==="name")filtered.sort((a,b)=>a.name.localeCompare(b.name));
 return filtered;
}
