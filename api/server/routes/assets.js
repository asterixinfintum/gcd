import express from 'express';

import utils from "../utils";
const {  authenticator } = utils;

const router = express.Router();

import User from '../models/user';
import Asset from '../models/asset';

const assets = router;

assets.get('/api/assetsuser', authenticator, async (req, res) => {
    const { user } = req;

    if (user) {
        Asset.find().then(assets => {
            res.status(201).send({ 
                assets
            });
        })
    }
})

export default assets;