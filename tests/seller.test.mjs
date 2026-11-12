import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {validateDraft,sanitizeDrafts} from "../seller-data.mjs";
const read=p=>readFileSync(new URL("../"+p,import.meta.url),"utf8");
const valid={name:"Bluetooth Speaker",description:"Compact speaker",category:"Electronics",price:"12000",stock:"4"};
test("seller draft accepts valid products and normalizes numeric fields",()=>{
 const draft=validateDraft(valid);
 assert.equal(draft.price,12000);assert.equal(draft.stock,4);
});
test("seller draft rejects unsafe or invalid input",()=>{
 for(const changes of [{name:"x"},{price:"-2"},{price:"1.5"},{stock:"-1"},{category:"Admin"},{description:"x".repeat(501)}])
  assert.throws(()=>validateDraft({...valid,...changes}));
});
test("saved drafts reject unknown IDs and malformed records",()=>{
 assert.equal(sanitizeDrafts([{id:"draft-test",...valid},{id:"bad",...valid},{id:"draft-invalid",...valid,stock:-3}]).length,1);
 assert.deepEqual(sanitizeDrafts({}),[]);
});
test("seller studio is local only and does not claim publishing",()=>{
 const html=read("seller.html"),script=read("seller-studio.mjs");
 assert.ok(html.includes("not published"));
 assert.ok(script.includes("localStorage"));
 assert.ok(!script.includes("fetch("));
 assert.ok(!script.includes("innerHTML"));
 assert.ok(read("marketplace.html").includes('href="seller.html"'));
});
