import express from 'express';
const router = express.Router();

import ChangeLog from '../models/changeLog';

import utils from "../utils";
const {  authenticator } = utils;

const changelogRoute = router

changelogRoute.post('/api/changelog', async (req, res) => {
  const { changeType, oldState, newState } = req.body;
  const itemId = req.query.itemId;

  // Create a new ChangeLog entry with the current date and time
  const changeLogEntry = new ChangeLog({
    itemId,
    changeType,
    changeDetails: {
      oldState,
      newState
    },
    date: new Date()
  });

  try {
    // Save the new ChangeLog entry
    await changeLogEntry.save();
    res.status(201).send(changeLogEntry);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

changelogRoute.get('/api/changelog', async (req, res) => {
  const { itemId } = req.query;

  try {
    // Find all ChangeLog entries for the given item ID
    const changeLogs = await ChangeLog.find({ itemId });

    res.status(200).send(changeLogs);
  } catch (error) {
    res.status(500).send(error.message);
  }
})

export default changelogRoute