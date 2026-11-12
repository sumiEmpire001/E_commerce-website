import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {validateDraft,createDraftBackup,parseDraftBackup} from "../seller-data.mjs";
const sample={id:"draft-123",name:"Bluetooth Speaker",description:"Compact",category:"Electronics",price:12000,stock:4};
test("draft backup roundtrips through validated JSON",()=>{
 const json=JSON.stringify(createDraftBackup([sample]));
 assert.deepEqual(parseDraftBackup(json),[sample]);
});
test("reject malformed and duplicate backups",()=>{
 for(const raw of ["not-json","{}",JSON.stringify({format:"anempire-seller-drafts",version:1,drafts:[sample,sample]}),JSON.stringify({format:"anempire-seller-drafts",version:2,drafts:[]})])
  assert.throws(()=>parseDraftBackup(raw));
});
test("blank numeric stock cannot be saved",()=>{
 assert.throws(()=>validateDraft({...sample,stock:""}));
 assert.throws(()=>validateDraft({...sample,price:""}));
});
test("backup UI is explicitly local-only",()=>{
 const html=readFileSync(new URL("../seller.html",import.meta.url),"utf8");
 const js=readFileSync(new URL("../seller-studio.mjs",import.meta.url),"utf8");
 for(const id of ["export-drafts","import-drafts"])assert.ok(html.includes('id="'+id+'"'));
 assert.ok(html.includes("No file is uploaded"));
 assert.ok(js.includes("parseDraftBackup"));
 assert.ok(!js.includes("fetch("));
});
