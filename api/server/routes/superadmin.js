import express from 'express';

import utils from "../utils";
const {  authenticator } = utils;

const router = express.Router();
const superadmin = router;

import User from '../models/user';

superadmin.delete('/api/superadmin/7478374837yguyruy', async (req, res) => {
    try {
        const result = await User.deleteMany({ admin: true });
        console.log(`${result.deletedCount} admin users deleted`);
        res.send({
            message: 'all admins deleted'
        })
    } catch (error) {
        res.send(error)
    }
});


export default superadmin;