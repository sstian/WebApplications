
const app = require("./lib/app");

app.listen(3000, (err) => {
  if (err) console.log(err);
  else {
    console.log("server is ready at http://localhost:3000");
  }
});