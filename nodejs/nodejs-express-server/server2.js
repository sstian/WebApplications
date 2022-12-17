const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("server2 is connected.");
  next();
});

app.get("/cars", (req, res) => {
  const cars = [
    {id:1, name: "奔驰", price: 180},
    {id:2, name: "宝马", price: 190},
    {id:3, name: "兰博基尼", price: 200}
  ]
  res.send(cars);
});

app.listen(5002, () => {
  console.log(`server2 start at http://localhost:5002/cars`);
});