import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const read=p=>readFileSync(new URL("../"+p,import.meta.url),"utf8");
test("buyer registration does not demand seller business details",()=>{
 const html=read("signup.html"),js=read("auth-flow.js");
 assert.ok(html.includes('value="buyer"'));
 assert.ok(html.includes('value="seller"'));
 assert.ok(html.includes('id="seller-business-fields" hidden'));
 assert.ok(js.includes('businessType.required=seller'));
 assert.ok(js.includes('accountType.addEventListener("change",syncAccountType)'));
});
test("unused sensitive profile fields are not collected",()=>{
 const html=read("signup.html");
 for(const id of ['id="dob"','id="postal"','id="country"','id="city"'])assert.ok(!html.includes(id),id);
});
test("seller preference is not presented as a granted seller role",()=>{
 const html=read("signup.html");
 assert.ok(html.includes("Seller accounts are not yet enabled"));
});
