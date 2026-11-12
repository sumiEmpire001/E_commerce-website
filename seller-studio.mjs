import {draftKey,validateDraft,sanitizeDrafts} from "./seller-data.mjs";
const form=document.getElementById("seller-form"),list=document.getElementById("draft-list"),status=document.getElementById("seller-status"),count=document.getElementById("draft-count");
let drafts=[];
try{drafts=sanitizeDrafts(JSON.parse(localStorage.getItem(draftKey)||"[]"));}catch{drafts=[];}
function save(){
 try{localStorage.setItem(draftKey,JSON.stringify(drafts));return true;}
 catch{status.textContent="Storage is unavailable or full. The draft could not be saved.";return false;}
}
function el(tag,className,text){const node=document.createElement(tag);if(className)node.className=className;if(text!==undefined)node.textContent=text;return node;}
function render(){
 list.replaceChildren();count.textContent=String(drafts.length);
 if(!drafts.length)list.append(el("p","text-muted","No local drafts yet."));
 for(const d of drafts){
  const card=el("article","card mb-3"),body=el("div","card-body");
  const heading=el("h3","h5",d.name),category=el("p","mb-1",d.category+" · ₦"+d.price.toLocaleString("en-NG")+" · "+d.stock+" in stock");
  const description=el("p","text-muted",d.description||"No description");
  const button=el("button","btn btn-sm btn-outline-danger","Delete draft");button.type="button";
  button.addEventListener("click",()=>{const previous=drafts;drafts=drafts.filter(x=>x.id!==d.id);if(!save())drafts=previous;render();});
  body.append(heading,category,description,button);card.append(body);list.append(card);
 }
}
form.addEventListener("submit",event=>{
 event.preventDefault();if(!form.reportValidity())return;
 try{
  if(drafts.length>=50)throw new Error("The local draft limit is 50.");
  const draft=validateDraft(Object.fromEntries(new FormData(form)));
  const previous=drafts;
  drafts=[{id:"draft-"+crypto.randomUUID(),...draft},...drafts];
  if(!save()){drafts=previous;return;}
  form.reset();status.textContent="Saved locally on this device. Not published to buyers.";render();
 }catch(error){status.textContent=error.message||"Unable to save draft.";}
});
document.getElementById("clear-drafts").addEventListener("click",()=>{
 if(!drafts.length)return;
 if(!confirm("Delete every local product draft on this device?"))return;
 const previous=drafts;drafts=[];if(!save())drafts=previous;render();
});
render();
