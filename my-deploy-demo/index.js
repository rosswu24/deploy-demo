const express = require("express");
const app = express();
const config = require("./config/${process.env.NODE_ENV}.js");

let currentCount = 0;

if (!config.PORT) {
  process.exit(1);
}

app.use(express.static(__dirname + "/public"));

console.log(config.PORT);

app.get("/api/counter", (req, res) => {
  res.json({
    counter: currentCount
  });
});

app.get("/api/counter/decrement", (req, res) => {
  --currentCount;
  res.status(200);
});

app.get("/api/counter/increment", (req, res) => {
  ++currentCount; // increment first
  res.status(200);
});

const server = app.listen(config.PORT);
