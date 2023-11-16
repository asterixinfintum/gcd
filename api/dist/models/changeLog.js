"use strict";

var mongoose = require('mongoose');

var changeLogSchema = new mongoose.Schema({
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  changeType: {
    type: String,
    required: true
  },
  changeDetails: {
    type: Object,
    required: true
  },
  date: {
    type: Date,
    required: true,
    "default": Date.now
  }
});
var ChangeLog = mongoose.model('ChangeLog', changeLogSchema);
module.exports = ChangeLog;