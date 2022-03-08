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
