import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const read=p=>readFileSync(new URL("../"+p,import.meta.url),"utf8");
test("seller drafts support editing and cancellation",()=>{
 const html=read("seller.html"),js=read("seller-studio.mjs");
 assert.ok(html.includes('id="cancel-edit"'));
 assert.ok(js.includes("function beginEdit(draft)"));
 assert.ok(js.includes("function endEdit()"));
 assert.ok(js.includes('drafts.map(item=>item.id===editingId'));
 assert.ok(js.includes("Editing cancelled."));
});
test("seller editing remains local and never publishes products",()=>{
 const js=read("seller-studio.mjs");
 assert.ok(js.includes("localStorage.setItem"));
 assert.ok(!js.includes("fetch("));
 assert.ok(!js.includes("innerHTML"));
 assert.ok(read("seller.html").includes("They are not published"));
});
