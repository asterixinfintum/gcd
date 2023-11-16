"use strict";

var mongoose = require('mongoose');

var assetBalanceSchema = new mongoose.Schema({
  asset: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  nameofAsset: {
    type: String,
    required: true,
    trim: true
  },
  userbalanceOfAsset: {
    type: Number,
    required: false,
    trim: true,
    "default": 0
  },
  userbalanceOfAssetInUSD: {
    type: Number,
    required: false,
    trim: true,
    "default": 0
  },
  allocationInUserWallet: {
    type: String,
    required: true,
    trim: true,
    "default": '0'
  },
  locked: {
    type: Boolean,
    "default": false
  }
});
var AssetBalance = mongoose.model('AssetBalance', assetBalanceSchema);
module.exports = AssetBalance;