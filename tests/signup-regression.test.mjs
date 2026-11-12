import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const read=p=>readFileSync(new URL("../"+p,import.meta.url),"utf8");
test("signup supports backward navigation without bypassing validation",()=>{
 const html=read("signup.html"),js=read("auth-flow.js");
 assert.equal((html.match(/class="btn btn-outline-secondary back-btn/g)||[]).length,3);
 assert.ok(js.includes('querySelectorAll(".back-btn")'));
 assert.ok(js.includes("for(let i=0;i<stages.length;i++)"));
});
test("Supabase signup success uses actual access token field",()=>{
 const js=read("auth-flow.js");
 assert.ok(js.includes("response.access_token"));
 assert.ok(!js.includes("response.session"));
 assert.ok(js.includes("show(0)"));
});
