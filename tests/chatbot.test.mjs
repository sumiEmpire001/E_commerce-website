import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const read=path=>readFileSync(new URL("../"+path,import.meta.url),"utf8");
test("help assistant uses textContent and no unsafe innerHTML",()=>{
 const code=read("chatbot.js");
 assert.ok(code.includes("textContent=message"));
 assert.ok(!code.includes(".innerHTML"));
 assert.ok(!code.includes("Math.random"));
});
test("assistant does not claim unsupported checkout or live support",()=>{
 const code=read("chatbot.js");
 assert.ok(code.includes("does not currently process real orders"));
 assert.ok(code.includes("not a live customer-service agent"));
 assert.ok(code.includes("offline help guide"));
});
test("help page exposes clear input and message log",()=>{
 const html=read("chatbot.html");
 assert.ok(html.includes('role="log"'));
 assert.ok(html.includes('maxlength="500"'));
 assert.ok(html.includes("Offline answers only"));
});
