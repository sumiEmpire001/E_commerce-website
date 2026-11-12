import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {products,addToCart,cleanCart,total} from "../marketplace-data.mjs";
const read=p=>readFileSync(new URL("../"+p,import.meta.url),"utf8");
test("marketplace product catalogue has valid prices, stock and unique ids",()=>{
 assert.ok(products.length>=5);
 assert.equal(new Set(products.map(p=>p.id)).size,products.length);
 for(const p of products){assert.ok(p.price>0);assert.ok(Number.isSafeInteger(p.price));assert.ok(Number.isSafeInteger(p.stock)&&p.stock>=0);}
});
test("cart respects stock and ignores unavailable product",()=>{
 let cart={};
 for(let i=0;i<50;i++)cart=addToCart(cart,"a1");
 assert.equal(cart.a1,8);
 assert.deepEqual(addToCart(cart,"a7"),cart);
 assert.deepEqual(addToCart(cart,"invalid"),cart);
 assert.equal(total({a1:2}),37000);
});
test("cart storage sanitation discards unknown and invalid quantities",()=>{
 assert.deepEqual(cleanCart({a1:200,a2:-1,unknown:5,a7:1}),{a1:8});
 assert.deepEqual(cleanCart(null),{});
});
test("original marketplace uses isolated module and disabled checkout",()=>{
 const html=read("marketplace.html");
 assert.ok(html.includes("marketplace-app.mjs"));
 assert.ok(html.includes('id="product-list"'));
 assert.ok(html.includes('id="cart-items"'));
 assert.ok(html.includes("Checkout unavailable"));
 assert.ok(!html.includes('src="script.js"'));
});
test("original community and chat do not fake live content",()=>{
 for(const page of ["home.html","chat.html"])assert.ok(!read(page).includes('src="script.js"'));
 assert.ok(read("home.html").includes("Posting coming soon"));
 assert.ok(read("chat.html").includes("Messaging coming soon"));
});
