const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get("/", (request, response) => {
  response.send("Hello World!");
});

const hello2 = (req, res) => {
  res.send("Hello World! 2");
};

app.get("/hello2", hello2);

app.get("/4", (req, res) => {
  let myHtml = "<html><body><h1>";
  myHtml += new Date();
  myHtml += "</h1></body></html>";
  res.send(myHtml);
});

app.get("/rulez", (req, res) => {
  let rulez = "ExpressJS Rulez!!!";
  res.send(rulez);
});

app.get("/forest", (req, res) => {
  let daylight = req.query.daylight;
  let isDaylight = daylight === "true" || daylight === "'true";
  if (isDaylight) {
    res.send("You are in a deep, decently lit wood...");
  } else {
    res.send("You are in a deep, dark wood....");
  }
});
