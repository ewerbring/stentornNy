const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stenSchema = new Schema(
  {
    imgPath: String,
    xposition: Number,
    yposition: Number,
  },
);

const Stenar = mongoose.model("Stenar", stenSchema);

module.exports = Stenar;
