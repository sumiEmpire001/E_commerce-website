/* Seller drafts are local-only and are never published to the marketplace. */
export const draftKey="anempire-seller-drafts-v1";
export const allowedCategories=Object.freeze(["Electronics","Fashion","Home & Kitchen","Books","Toys & Games"]);
export function validateDraft(raw){
 const name=String(raw?.name||"").trim(),description=String(raw?.description||"").trim(),category=String(raw?.category||"");
 const price=Number(raw?.price),stock=Number(raw?.stock);
 if(raw?.price===null||raw?.price===undefined||String(raw.price).trim()===""||raw?.stock===null||raw?.stock===undefined||String(raw.stock).trim()==="")throw new Error("Enter both a price and a stock quantity.");
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

/* Portable local backup, deliberately not a publication or server upload. */
export const backupVersion=1;
export function createDraftBackup(drafts){
 return {format:"anempire-seller-drafts",version:backupVersion,exportedAt:new Date().toISOString(),drafts:sanitizeDrafts(drafts)};
}
export function parseDraftBackup(raw){
 if(typeof raw!=="string"||raw.length>200000)throw new Error("Backup must be a JSON file smaller than 200 KB.");
 let data;
 try{data=JSON.parse(raw);}catch{throw new Error("Backup is not valid JSON.");}
 if(!data||data.format!=="anempire-seller-drafts"||data.version!==backupVersion||!Array.isArray(data.drafts)||data.drafts.length>50)
  throw new Error("This is not a supported AnEmpire draft backup.");
 const safe=sanitizeDrafts(data.drafts);
 if(safe.length!==data.drafts.length||new Set(safe.map(x=>x.id)).size!==safe.length)
  throw new Error("Backup contains invalid or duplicate product drafts.");
 return safe;
}
