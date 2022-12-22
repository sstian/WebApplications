const express = require("express");
const requestHandler = require("./wechat/request-handler");

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(requestHandler());

const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`servier is running at port ${PORT}`);
});
