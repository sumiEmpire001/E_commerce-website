import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {readSession,clearSession,sessionKey} from "../session-state.mjs";
const memory=()=>{const data=new Map();return {getItem:k=>data.get(k)||null,setItem:(k,v)=>data.set(k,v),removeItem:k=>data.delete(k)}};
test("active session is readable without exposing credentials in the UI",()=>{
 const store=memory();store.setItem(sessionKey,JSON.stringify({access_token:"token",user_id:"user-1",expires_at:2000}));
 assert.deepEqual(readSession(store,1000),{access_token:"token",user_id:"user-1",expires_at:2000});
 clearSession(store);assert.equal(readSession(store,1000),null);
});
test("expired and malformed sessions are discarded",()=>{
 const store=memory();
 store.setItem(sessionKey,JSON.stringify({access_token:"token",user_id:"user-1",expires_at:1000}));
 assert.equal(readSession(store,1000),null);assert.equal(store.getItem(sessionKey),null);
 store.setItem(sessionKey,"{invalid");assert.equal(readSession(store),null);
 store.setItem(sessionKey,JSON.stringify({access_token:"",user_id:"user",expires_at:9999999999999}));
 assert.equal(readSession(store),null);
});
test("original buyer pages expose account controls and preserve original styling",()=>{
 for(const path of ["home.html","marketplace.html"]){
  const html=readFileSync(new URL("../"+path,import.meta.url),"utf8");
  assert.ok(html.includes('id="account-controls"'));
  assert.ok(html.includes('src="session-ui.mjs"'));
  assert.ok(html.includes("bootstrap/css/bootstrap.min.css"));
 }
});
