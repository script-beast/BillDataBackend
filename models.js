const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  billDate: {
    type: Date,
    required: true,
  },
  paidDate: {
    type: Date,
  },
  unitConsumed: {
    type: Number,
    required: true,
    min: 0,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
});

module.exports = mongoose.model("Bill", billSchema);
