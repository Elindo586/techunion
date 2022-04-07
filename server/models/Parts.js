const { Schema, model } = require("mongoose");

const PartsSchema = new Schema({
  Reference: {
    type: String,
    unique: true,
  },
  Description: {
    type: String,
  },
  Replacements: {
    type: String,
  },
});

const Parts = model("Parts", PartsSchema);

module.exports = Parts;
