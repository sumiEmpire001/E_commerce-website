import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {products,filterProducts} from "../marketplace-data.mjs";
test("buyer filters by category, search and availability",()=>{
 assert.equal(filterProducts(products,{category:"Electronics"}).length,2);
 assert.equal(filterProducts(products,{query:"headphones"}).length,1);
 assert.ok(filterProducts(products,{inStock:true}).every(p=>p.stock>0));
 assert.equal(filterProducts(products,{category:"Toys & Games",inStock:true}).length,0);
});
test("sorting is stable and does not mutate catalogue",()=>{
 const original=products.map(p=>p.id);
 const low=filterProducts(products,{sort:"price-low"});
 assert.ok(low.every((p,i)=>i===0||low[i-1].price<=p.price));
 const high=filterProducts(products,{sort:"price-high"});
 assert.ok(high.every((p,i)=>i===0||high[i-1].price>=p.price));
 assert.deepEqual(products.map(p=>p.id),original);
});
test("buyer controls are wired and original markup preserved",()=>{
 const html=readFileSync(new URL("../marketplace.html",import.meta.url),"utf8");
 const app=readFileSync(new URL("../marketplace-app.mjs",import.meta.url),"utf8");
 for(const id of ["product-sort","stock-only","product-results","clear-cart"])assert.ok(html.includes('id="'+id+'"'));
 assert.ok(app.includes("filterProducts(products"));
 assert.ok(app.includes("Demo cart cleared."));
 assert.ok(html.includes("bootstrap/css/bootstrap.min.css"));
});
