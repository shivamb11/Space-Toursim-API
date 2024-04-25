const mongoose = require("mongoose");
const { Schema } = mongoose;

const tourSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
  },
  price: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
