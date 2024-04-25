if (process.env.NODE !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const tourRouter = require("./routes");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

app.use(express.json());
app.use("/", tourRouter);

app.listen(3000, (req, res) => {
  console.log("LISENING TO PORT 3000");
});
