const express = require("express");
const Tour = require("./models");
const router = express.Router();

router.get("/tours", async (req, res) => {
  const tours = await Tour.find({ isFeatured: false });
  res.send(tours);
});

router.get("/featuredtours", async (req, res) => {
  const tours = await Tour.find({ isFeatured: true });
  res.send(tours);
});

router.get("/tours/:id", async (req, res) => {
  const { id } = req.params;
  const tour = await Tour.findById(id);
  res.send(tour);
});

router.post("/tours", async (req, res) => {
  const { name, images, price, duration, description } = req.body;
  const tour = new Tour({ name, images, price, duration, description });
  await tour.save();
  res.send(tour);
});

module.exports = router;
