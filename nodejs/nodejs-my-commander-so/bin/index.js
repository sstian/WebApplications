#!/usr/bin/env node
const program = require("commander");
const register = require("../lib");


Object.values(register).map(fn => fn(program));

// 表示使用 Commander 来处理命令行参数
program.parse(process.argv);
