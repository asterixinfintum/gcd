const mongoose = require('mongoose');

const changeLogSchema = new mongoose.Schema({
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
    default: Date.now
  }
});

const ChangeLog = mongoose.model('ChangeLog', changeLogSchema);

module.exports = ChangeLog;
