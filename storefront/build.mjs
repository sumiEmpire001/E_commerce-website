import {mkdir,copyFile,rm,stat} from "node:fs/promises";
import {join} from "node:path";
const root=new URL(".",import.meta.url);
const out=new URL("./dist/",root);
await rm(out,{recursive:true,force:true});
await mkdir(out,{recursive:true});
const allowlist=["index.html","404.html","styles.css","app.mjs","catalog.mjs","robots.txt"];
for(const name of allowlist){
  const source=new URL(name,root);
  if(!(await stat(source)).isFile())throw new Error("Missing public asset: "+name);
  await copyFile(source,new URL(name,out));
}
console.log("Built static storefront with "+allowlist.length+" allowlisted files.");
