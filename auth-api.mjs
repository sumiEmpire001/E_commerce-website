// Minimal Supabase Auth REST adapter for the original HTML site.
// No passwords or bearer tokens are logged or persisted in localStorage.
import {supabaseConfig} from "./auth-config.mjs";
export function authReady(){return Boolean(supabaseConfig());}
export function authConfigError(){
  return "Account service is not configured. Please contact AnEmpire support.";
}
async function request(path,options={}){
  const config=supabaseConfig();
  if(!config)throw new Error(authConfigError());
  const response=await fetch(config.url+"/auth/v1/"+path,{
    method:options.method||"POST",
    headers:{"apikey":config.key,"Content-Type":"application/json",...(options.headers||{})},
    body:JSON.stringify(options.body||{})
  });
  const data=await response.json().catch(()=>({}));
  if(!response.ok)throw new Error(data.msg||data.error_description||data.message||"Account request failed. Please try again.");
  return data;
}
export async function register({email,password,username,firstName,lastName}){
  return request("signup",{body:{email,password,data:{username,first_name:firstName,last_name:lastName}}});
}
export async function login({email,password}){
  return request("token?grant_type=password",{body:{email,password}});
}
export async function logout(accessToken){
  const config=supabaseConfig();
  if(config&&accessToken){
    try{await request("logout",{headers:{"Authorization":"Bearer "+accessToken},body:{}});}catch{/* Clear local session even if network logout fails. */}
  }
}
