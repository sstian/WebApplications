# so

so, life so easy!

## Usage
```cmd
> so
Usage: so [options] command [args...]

so, life so easy!

Options:
  -v, --version                    output the version number
  -f, --framework <framework>      setup framework
  -h, --help                       display help for command

Commands:
  create|crt <project> [other...]  create project with framework
  version|ver                      output the version number
  help [command]                   display help for command

> so version
0.1.0

> so -v
0.1.0

> so --version
0.1.0

> so create my-project
? 请选择你所使用的框架 express
√ 代码下载成功
Done! you run:
cd my-project
npm install
npm run dev
```

## Operation

### Basic
Node.js实现自定义命令行工具保姆级教学
https://blog.csdn.net/qq_44910894/article/details/130694660

1. init package.
```
npm init -y

// package.json
  "bin": {
    "so": "./bin/index.js"
  },
```

2. create js file.
// ./bin/index.js
```js
#!/usr/bin/env node

// '#!' can only be used at the start of a file. ts(18026)
// 告诉操作系统用 Node 来运行此文件
console.log("hello so");

/*
so --help => node so --help

[
  'D:\\Program\\nodejs\\node.exe',
  'C:\\Users\\Snow-Angel\\AppData\\Roaming\\npm\\node_modules\\so\\bin\\index.js',
  '--help'
]

第一个元素值为执行当前 cli 文件的环境位置
第二个元素值为当前 cli 文件的所在位置
其它元素值为执行 cli 所带的参数
*/
console.log(process.argv);
```

3. link script.
```
npm link
// or npm install -g

# 工作原理：
> npm prefix -g
C:\Users\Snow-Angel\AppData\Roaming\npm

> npm link
// 1. create current project symlink to {prefix}/node_modules/{package}/. 
// package is {"name": "package"} in package.json
// 2. create script under {prefix}/ with {cli}, {cli}.cmd, {cli}.ps1. 
// cli is name of {"bin": {"cli", "..."}} in package.json
e.g.
+ {prefix}
---+ node_modules
-----+ so -> D:\Develop\WebApplications\nodejs\nodejs-my-commander-so
-- so
-- so.cmd
-- so.ps1
```

C:\Users\Snow-Angel\AppData\Roaming\npm
// so
```bash
#!/bin/sh
basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")

case `uname` in
    *CYGWIN*|*MINGW*|*MSYS*) basedir=`cygpath -w "$basedir"`;;
esac

if [ -x "$basedir/node" ]; then
  exec "$basedir/node"  "$basedir/node_modules/nodejs-my-commander-so/bin/index.js" "$@"
else 
  exec node  "$basedir/node_modules/nodejs-my-commander-so/bin/index.js" "$@"
fi

```

// so.cmd
```cmd
@ECHO off
GOTO start
:find_dp0
SET dp0=%~dp0
EXIT /b
:start
SETLOCAL
CALL :find_dp0

IF EXIST "%dp0%\node.exe" (
  SET "_prog=%dp0%\node.exe"
) ELSE (
  SET "_prog=node"
  SET PATHEXT=%PATHEXT:;.JS;=;%
)

endLocal & goto #_undefined_# 2>NUL || title %COMSPEC% & "%_prog%"  "%dp0%\node_modules\nodejs-my-commander-so\bin\index.js" %*

```

// so.ps1
```powershell
#!/usr/bin/env pwsh
$basedir=Split-Path $MyInvocation.MyCommand.Definition -Parent

$exe=""
if ($PSVersionTable.PSVersion -lt "6.0" -or $IsWindows) {
  # Fix case when both the Windows and Linux builds of Node
  # are installed in the same directory
  $exe=".exe"
}
$ret=0
if (Test-Path "$basedir/node$exe") {
  # Support pipeline input
  if ($MyInvocation.ExpectingInput) {
    $input | & "$basedir/node$exe"  "$basedir/node_modules/nodejs-my-commander-so/bin/index.js" $args
  } else {
    & "$basedir/node$exe"  "$basedir/node_modules/nodejs-my-commander-so/bin/index.js" $args
  }
  $ret=$LASTEXITCODE
} else {
  # Support pipeline input
  if ($MyInvocation.ExpectingInput) {
    $input | & "node$exe"  "$basedir/node_modules/nodejs-my-commander-so/bin/index.js" $args
  } else {
    & "node$exe"  "$basedir/node_modules/nodejs-my-commander-so/bin/index.js" $args
  }
  $ret=$LASTEXITCODE
}
exit $ret

```

### Command
```
# 完整的 node.js 命令行解决方案
# https://www.npmjs.com/package/commander
npm install commander
// name(str: string): this;
// usage(str: string): this;
// str: string, flags?: string, description?: string): this;
// description(str: string): this;
// option(flags: string, description?: string, defaultValue?: string | boolean | string[]): this;
// option<T>(flags: string, description: string, parseArg: (value: string, previous: T) => T, defaultValue?: T): this;
// command(nameAndArgs: string, description: string, opts?: ExecutableCommandOptions): this;
//   nameAndArgs - command name and arguments, args are  `<required>` or `[optional]` and last may also be `variadic...`
// alias(alias: string): this;
// action(fn: (...args: any[]) => void | Promise<void>): this;
// argument(name: string, description?: string, defaultValue?: unknown): this;
// argument<T>(flags: string, description: string, fn: (value: string, previous: T) => T, defaultValue?: T): this;

# A collection of common interactive command line user interfaces.
# https://www.npmjs.com/package/inquirer
# Inquirer v9 and higher are native esm modules, this mean you cannot use the commonjs syntax.
# Alternatively, you can rely on an older version until you're ready to upgrade your environment.
# 
# node.js 命令行交互工具（最新版） inquirer.js 实用教程
# https://blog.csdn.net/weixin_41192489/article/details/126045793
npm install --save inquirer@^8.0.0

# Download and extract a git repository (GitHub, GitLab, Bitbucket) from node.
# https://www.npmjs.com/package/download-git-repo
npm install download-git-repo

# Elegant terminal spinner
# https://www.npmjs.com/package/ora
# 在 6.x.x 版本之后不再使用 CommonJS 模块化规范而转为使用 ES Module 模块化规范，需要下载对应的最新 5.x.x 版本
npm install ora@5

# Terminal string styling done right
# https://www.npmjs.com/package/chalk
# Chalk 5 is ESM. If you want to use Chalk with TypeScript or a build tool, you will probably want to use Chalk 4 for now.
# 在 5.x.x 版本之后不再使用 CommonJS 模块化规范而转为使用的 ES Module 的模块化规范，需要下载对应的最新 4.x.x 版本
npm install chalk@4


```

## Document
https://docs.npmjs.com/cli/v10/configuring-npm/package-json#bin

package.json

bin
A lot of packages have one or more executable files that they'd like to install into the PATH. npm makes this pretty easy (in fact, it uses this feature to install the "npm" executable.)

To use this, supply a bin field in your package.json which is a map of command name to local file name. When this package is installed globally, that file will be either linked inside the global bins directory or a cmd (Windows Command File) will be created which executes the specified file in the bin field, so it is available to run by name or name.cmd (on Windows PowerShell). When this package is installed as a dependency in another package, the file will be linked where it will be available to that package either directly by npm exec or by name in other scripts when invoking them via npm run-script.

For example, myapp could have this:

{
  "bin": {
    "myapp": "./cli.js"
  }
}
So, when you install myapp, in case of unix-like OS it'll create a symlink from the cli.js script to /usr/local/bin/myapp and in case of windows it will create a cmd file usually at C:\Users\{Username}\AppData\Roaming\npm\myapp.cmd which runs the cli.js script.

If you have a single executable, and its name should be the name of the package, then you can just supply it as a string. For example:

{
  "name": "my-program",
  "version": "1.2.5",
  "bin": "./path/to/program"
}
would be the same as this:

{
  "name": "my-program",
  "version": "1.2.5",
  "bin": {
    "my-program": "./path/to/program"
  }
}
Please make sure that your file(s) referenced in bin starts with #!/usr/bin/env node, otherwise the scripts are started without the node executable!

Note that you can also set the executable files using directories.bin.

See folders for more info on executables.


