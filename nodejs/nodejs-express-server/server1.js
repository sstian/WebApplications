const express = require("express");
var axios = require("axios");
const app = express();


app.use((req, res, next) => {
  console.log("server1 is connected.");
  next();
});

app.get("/students", (req, res) => {
  const students = [
    {id:1, name: "Jack", age: 18},
    {id:2, name: "Tom", age: 19},
    {id:3, name: "Alice", age: 20}
  ]
  res.send(students);
});

app.get("/gold", (req, res) => {
  var config = {
    method: "get",
    url: "https://www.cngold.org/sgapp/price/gold/pageData.do?currentPage=1&pageSize=11&startTime=2020-10-01&endTime=2023-07-06&brandId=2880&productId=11&variable=json&_=1690107538916",
    headers: {
      "User-Agent": "",
      // "User-Agent": "Apifox/1.0.0 (https://apifox.com)",
      // "Accept": "*/*",
      // "Host": "www.cngold.org",
      // "Connection": "keep-alive"
    }
  };
  
  axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      // console.log(response);
      // console.log(response.data);
      let d = response.data;
      // let window = window || globalThis;
      // eval(d);
      // console.log(json[0].data);
      const ds = d.split(/var\s+json\s*=\s*/gi);
      // const ds = d.split(/var json = /);
      const re = ds[1].slice(0, -1);
      const da = JSON.parse(re);
      const fin = da[0].data;
      console.log(fin);
      res.json(fin);
  
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(5001, () => {
  console.log(`server1 start at http://localhost:5001/students`);
});