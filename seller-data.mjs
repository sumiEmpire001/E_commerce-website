/* Seller drafts are local-only and are never published to the marketplace. */
export const draftKey="anempire-seller-drafts-v1";
export const allowedCategories=Object.freeze(["Electronics","Fashion","Home & Kitchen","Books","Toys & Games"]);
export function validateDraft(raw){
 const name=String(raw?.name||"").trim(),description=String(raw?.description||"").trim(),category=String(raw?.category||"");
 const price=Number(raw?.price),stock=Number(raw?.stock);
 if(name.length<3||name.length>80)throw new Error("Product name must contain 3–80 characters.");
 if(description.length>500)throw new Error("Description must be 500 characters or fewer.");
 if(!allowedCategories.includes(category))throw new Error("Select a valid category.");
 if(!Number.isSafeInteger(price)||price<100||price>100000000)throw new Error("Price must be a whole naira amount between ₦100 and ₦100,000,000.");
 if(!Number.isSafeInteger(stock)||stock<0||stock>100000)throw new Error("Stock must be a whole number from 0 to 100,000.");
 return {name,description,category,price,stock};
}
export function sanitizeDrafts(value){
 if(!Array.isArray(value))return [];
 const safe=[];
 for(const item of value.slice(0,50)){
  try{const draft=validateDraft(item);if(typeof item.id==="string"&&/^draft-[a-z0-9-]{1,64}$/i.test(item.id))safe.push({id:item.id,...draft});}catch{}
 }
 return safe;
}
