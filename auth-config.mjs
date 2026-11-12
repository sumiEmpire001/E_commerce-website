export function supabaseConfig(){
  const cfg=globalThis.ANEMPIRE_CONFIG;
  if(!cfg||typeof cfg.supabaseUrl!=="string"||typeof cfg.publishableKey!=="string")return null;
  const url=cfg.supabaseUrl.trim().replace(/\/$/,"");
  const key=cfg.publishableKey.trim();
  if(!/^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(url)||!key.startsWith("sb_publishable_"))return null;
  return {url,key};
}
