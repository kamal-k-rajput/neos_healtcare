const app = require("./index");

const connect = require("./config/db");




app.listen(8080, async () => {
  await connect();
  console.log("listining on the port 8080");
});


