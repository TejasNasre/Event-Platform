const dotenv = require("dotenv").config();
const connect = require("./db/index.js");
const app = require("./app.js");
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

connect()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Server is running on port http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
