# nodejs-zero-click-api

Automated provisioning of API, provided by Node.js.

## Development

## Prerequisites

- Node.js 14.17
- Text Editor, e.g. Visual Studio Code
- Use Windows (GIT bash) command window or Visual Studio Code Terminal

### Installing

npm login with your desktop soeid/password.

You will need to install ['nodemon ](https://nodemon.io/) to run the server locally with auto-reload on code changes:
```cmd
npm install -g nodemon
```

Install project dependencies:
```cmd
npm install
```

Run the server in development mode, local address: http://127.0.0.1:3300/, choosing one:
```cmd
npm run develop
nodemon ./server.js -e js,json,yml,yaml
nodemon
```

If you see {"message":"Received status code [401] from <component> message [Unauthorized]"...] in log, double check whether username and password set correctly for the
<component>.

Run tests (with coverage):
```cmd
npm test
npm run coverage
```

If running individual tests add --exit to the mocha arguments or the mock servers will remain open.

## Knowledge
In America as NAM:
- **Daylight Time (Summer Time)** is from the second Sunday in March at 2 A.M.to the first Sunday in November at 2 A.M.,which is named Spring Forward 1 Hour and **12** hours behind Beijing Time.
- **Standard Time (Winter Time)** is the other part,which is named Fall BAck 1 Hour and **13** hours behind Beijing Time.

In English as EMEA:
- **Daylight Time (Summer Time)** is from the last Sunday in March at 2 A.M.to the last Sunday in Octpber at 2 A.M.,which is named Spring Forward 1 Hour and **12** hours behind Beijing Time.
- **Standard Time (Winter Time)** is the other part,which is named Fall BAck 1 Hour and **13** hours behind Beijing Time.

## Operations
When you are debugging program with Visual Studio Code as editor and after updating environmnet variables,
plese **Exit All Visual Studio Code Editors** and then startup the editor to make it work well.

## Tips

**JavaScript**
- object to string: `JSON.stringify(object)`;
- array to string: `array.join(", ")`;
- number to string: `number.toString()`;
- string to number: `parseInt(string); or parseFloat(string)`;

**Node.js**
- base64 encoding:
  ```js
  const { username, password } = credential;
  const buffer = Buffer.from("${username}:${password}","utf8");
  const token = buffer.toString("base64");
  ```
- base64 decoding:
  ```js
  const buffer = Buffer.from(token,"base64");
  const data = buffer.toString("ascii");
  ```
- folder:
  - check exists: if not exists, throw error
  ```js
  const fs = require("fs");
  const filedir = "data/snowflake/";
  fs.statSync(filedir);
  ```
  - create folder:
  ```js
  // method 1. synchron: if exists, throw error.
  fs.mkdirSync("${filedir}");

  // method 2. asynchon: if not exists, make dir; otherwise, don't throw error.
  const releaseStreamPath = "\\snowserver\batch\2022\20221220";
  fs.mkdir(`${releaseStreamPath}`, { recursive: true }, (err) => {
    if(err) throw err;
  });
  ```
- file:
  - check exists: if not exists, throw error
  ```js
  const fs = require("fs");
  const filepath = `data/snowflake/weekly_20220415.json`;
  fs.accessSync(filepath, fs.constants.F_OK);
  ```
  - create file:
  ```js
  fs.writeFileSync(filepath, inititalItems,"utf8");
  ```
