import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const read = file => readFileSync(new URL("../" + file, import.meta.url), "utf8");
test("original AnEmpire landing navigation is preserved", () => {
  const html = read("index.html");
  for (const path of ["About.html","services.html","suppout.html","signup.html","signin.html","chatbot.html"]) assert.ok(html.includes(path), path);
});
test("original four registration stages are preserved", () => {
  const html = read("signup.html");
  for (let i = 1; i <= 4; i++) assert.ok(html.includes('id="stage-' + i + '"'));
  assert.ok(html.includes('id="signup-status"'));
  assert.ok(html.includes('auth-flow.js'));
  assert.ok(!/<a\s+href="signin.html">\s*Submit/i.test(html));
});
test("sign-in cannot navigate directly to home through a submit link", () => {
  const html = read("signin.html");
  assert.ok(!/<a\s+href="home.html">\s*Sign In/i.test(html));
  assert.ok(html.includes('id="signin-form"'));
  assert.ok(html.includes('auth-flow.js'));
});
test("authentication never falsely reports success without a backend", () => {
  const js = read("auth-flow.js");
  assert.ok(js.includes("not yet available"));
  assert.ok(!js.includes("localStorage.setItem"));
  assert.ok(!js.includes("window.location.href"));
});
