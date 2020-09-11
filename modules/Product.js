const mongoose = require("mongoose");

const ProductScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    default:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur error rem dolore molestiae tempore cumque quaerat! Quisquam odio commodi tenetur delectus, facilis nesciunt!",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("product", ProductScheme);
