/* Session display is only a convenience; it is not server-side authorization. */
export const sessionKey="anempire-session";
export function readSession(storage,now=Date.now()){
 try{
  const raw=storage.getItem(sessionKey);
  if(!raw)return null;
  const value=JSON.parse(raw);
  if(!value||typeof value.access_token!=="string"||!value.access_token||typeof value.user_id!=="string"||!value.user_id||!Number.isFinite(value.expires_at)||value.expires_at<=now){
   storage.removeItem(sessionKey);return null;
  }
  return {access_token:value.access_token,user_id:value.user_id,expires_at:value.expires_at};
 }catch{return null;}
}
export function clearSession(storage){try{storage.removeItem(sessionKey);}catch{}}
