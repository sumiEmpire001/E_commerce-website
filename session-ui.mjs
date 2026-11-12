import {readSession,clearSession} from "./session-state.mjs";
const container=document.getElementById("account-controls");
if(container){
 const session=readSession(sessionStorage);
 const label=document.createElement("span");label.className="small mr-2";
 if(session){
  label.textContent="Signed in (this tab)";
  const button=document.createElement("button");button.type="button";button.className="btn btn-sm btn-outline-light";button.textContent="Sign out";
  button.addEventListener("click",async()=>{
   button.disabled=true;
   try{
    const {logout}=await import("./auth-api.mjs");
    await logout(session.access_token);
   }catch{}finally{
    clearSession(sessionStorage);
    window.location.assign("signin.html");
   }
  });
  container.append(label,button);
 }else{
  label.textContent="Guest mode";
  const link=document.createElement("a");link.href="signin.html";link.className="btn btn-sm btn-outline-light";link.textContent="Sign in";
  container.append(label,link);
 }
}
