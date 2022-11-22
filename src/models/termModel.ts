const mongoose = require("mongoose");

const termSchema = new mongoose.Schema({
  name: String,
  definition: String,
});

module.exports = mongoose.model("Term", Term);
