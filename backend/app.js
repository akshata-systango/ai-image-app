import cron from "node-cron";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

cron.schedule("* * * * *", () => {
  console.log("running a task every minute");
});

const app = express();
app.use(cors());
var jsonParser = bodyParser.json();

// Post request returns product details.
app.post("/product", jsonParser, function (req, res) {
  res.json({
    data: req.body,
  });
});

app.listen(8000);
