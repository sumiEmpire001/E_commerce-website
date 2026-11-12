import {draftKey,validateDraft,sanitizeDrafts} from "./seller-data.mjs";
const form=document.getElementById("seller-form"),list=document.getElementById("draft-list"),status=document.getElementById("seller-status"),count=document.getElementById("draft-count");
let drafts=[];
let editingId=null;
const submitButton=form.querySelector('button[type="submit"]');
const cancelButton=document.getElementById("cancel-edit");
function endEdit(){editingId=null;form.reset();submitButton.textContent="Save local draft";cancelButton.hidden=true;}
function beginEdit(draft){
 editingId=draft.id;
 for(const field of ["name","category","price","stock","description"])form.elements.namedItem(field).value=draft[field];
 submitButton.textContent="Update local draft";cancelButton.hidden=false;
 status.textContent="Editing a local draft. Changes are not published.";
 form.elements.namedItem("name").focus();
}
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
  button.addEventListener("click",()=>{const previous=drafts;drafts=drafts.filter(x=>x.id!==d.id);if(!save())drafts=previous;else if(editingId===d.id)endEdit();render();});
  const edit=el("button","btn btn-sm btn-outline-primary mr-2","Edit draft");edit.type="button";
  edit.addEventListener("click",()=>beginEdit(d));
  body.append(heading,category,description,edit,button);card.append(body);list.append(card);
 }
}
form.addEventListener("submit",event=>{
 event.preventDefault();if(!form.reportValidity())return;
 try{
  if(!editingId&&drafts.length>=50)throw new Error("The local draft limit is 50.");
  const draft=validateDraft(Object.fromEntries(new FormData(form)));
  const previous=drafts;
  if(editingId){
   if(!drafts.some(item=>item.id===editingId))throw new Error("This draft no longer exists.");
   drafts=drafts.map(item=>item.id===editingId?{id:item.id,...draft}:item);
  }else drafts=[{id:"draft-"+crypto.randomUUID(),...draft},...drafts];
  if(!save()){drafts=previous;return;}
  const updated=Boolean(editingId);endEdit();status.textContent=updated?"Local draft updated. Not published to buyers.":"Saved locally on this device. Not published to buyers.";render();
 }catch(error){status.textContent=error.message||"Unable to save draft.";}
});
cancelButton.addEventListener("click",()=>{endEdit();status.textContent="Editing cancelled.";});
document.getElementById("clear-drafts").addEventListener("click",()=>{
 if(!drafts.length)return;
 if(!confirm("Delete every local product draft on this device?"))return;
 const previous=drafts;drafts=[];if(!save())drafts=previous;else endEdit();render();
});
render();
