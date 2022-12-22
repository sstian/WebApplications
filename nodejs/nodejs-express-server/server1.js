const express = require("express");
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

app.listen(5001, () => {
  console.log(`server1 start at http://localhost:5001/students`);
});