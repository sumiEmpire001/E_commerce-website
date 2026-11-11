import test from "node:test";
import assert from "node:assert/strict";
import {products,money,filterProducts,addItem,setItemQuantity,cartTotals,sanitizeCart} from "../storefront/catalog.mjs";
test("search and category filters are case-insensitive",()=>{
  assert.equal(filterProducts(products,{search:"HEADPHONES"}).length,1);
  assert.ok(filterProducts(products,{category:"Home"}).every(p=>p.category==="Home"));
  assert.equal(filterProducts(products,{search:"not-here"}).length,0);
});
test("money formats NGN without fractions",()=>assert.match(money(12500),/12,500/));
test("cart totals are calculated from trusted product prices",()=>{
  const p=products[0];const cart=addItem({},p,2);
  assert.deepEqual(cartTotals(cart,products),{quantity:2,subtotal:p.price*2});
});
test("stock limits and invalid quantities are rejected",()=>{
  const p=products[0];
  assert.throws(()=>addItem({},p,p.stock+1),/stock/);
  assert.throws(()=>addItem({},p,0),/quantity/);
  assert.throws(()=>setItemQuantity({},p,-1),/quantity/);
  assert.throws(()=>addItem({},products.find(x=>x.stock===0)),/stock/);
});
test("removing last item deletes its cart entry",()=>{
  const p=products[0];assert.deepEqual(setItemQuantity({[p.id]:1},p,0),{});
});
test("stored cart is validated and capped by current stock",()=>{
  const p=products[0];
  assert.deepEqual(sanitizeCart({[p.id]:1000,unknown:2},products),{[p.id]:p.stock});
  assert.deepEqual(sanitizeCart(null,products),{});
  assert.deepEqual(sanitizeCart({[p.id]:"2"},products),{});
});
test("unknown product IDs cannot inflate cart totals",()=>{
  assert.deepEqual(cartTotals({unknown:100},products),{quantity:0,subtotal:0});
});
