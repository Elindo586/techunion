const { Schema, model } = require("mongoose");

const CylindersSchema = new Schema({
  cylinder: {
    type: String,
    unique: true,
  },
  style: {
    type: String,
  },
  replacement: {
    type: String,
  },
});

const Cylinders = model("Cylinders", CylindersSchema);

module.exports = Cylinders;
