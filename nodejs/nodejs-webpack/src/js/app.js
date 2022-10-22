
// import {year, hello} from "./module1";
import * as module1 from "./module1";

// import {info, hi} from "./module2";
import * as module2 from "./module2";

import school from "./module3";

import "../css/demo1.css";
import "../css/demo2.less";

// js兼容性处理，包含ES6高级语法地转换
import "@babel/polyfill";

console.log(module1.year, module1.hello());
console.log(module2.info, module2.hi());
console.log(school);
