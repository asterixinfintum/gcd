"use strict";

var mongoose = require('mongoose');

var assetSchema = new mongoose.Schema({
  nameOfAsset: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  priceInUSD: {
    type: String,
    required: true,
    trim: true
  },
  pricechangeIn24: {
    type: String,
    required: true,
    trim: true
  }
});
var Asset = mongoose.model('Asset', assetSchema);
module.exports = Asset;