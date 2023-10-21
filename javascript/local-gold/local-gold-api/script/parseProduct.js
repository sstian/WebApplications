const fs = require("fs");
const path = require("path");

const filepath = "./productHtml.txt";
let content = fs.readFileSync(path.join(__dirname, filepath), "utf8");
// console.log(content);

content = content.trim();
content = content.replace(/<select.*"><option/, "<option");
content = content.replace(/<\/select>/, "");
content = content.replace(/<\/option>/gi, "\n");
content = content.replace(/">/gi, ",");
content = content.replace(/<option\s+value="/gi, "");

console.log(content);
fs.writeFileSync(filepath, content, "utf8");


/*
input: productHtml.text
<select name="" class="select_name" id="product_3" style="font-family: simsun;"><option value="11">黄金价格</option><option value="13">铂金价格</option><option value="56">饰品金价(内地)</option><option value="57">黄金饰品(香港)</option><option value="58">铂金价格(香港)</option><option value="59">金条价格(香港)</option><option value="80">金条金价(内地)</option></select>

execute: 
PS D:\Develop\WebApplications\nodejs\local-gold-api\script> node .\parseProduct.js

output: productHtml.text
11,黄金价格
13,铂金价格
56,饰品金价(内地)
57,黄金饰品(香港)
58,铂金价格(香港)
59,金条价格(香港)
80,金条金价(内地)

*/