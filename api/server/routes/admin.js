import express from 'express';

import utils from "../utils";
const {  authenticator } = utils;

const router = express.Router();
const admin = router;

import User from '../models/user';
import Asset from '../models/asset';
import AssetBalance from '../models/assetBalance';

admin.get('/api/admingetuser', authenticator, async (req, res) => {
    const { user } = req;
    const { id } = req.query;
    
    if (user.admin) {
        const user = await User.findOne({ _id: id });

        res.send({
            message: 'user',
            user
        })
    } else {
        res.send({
            message: 'not admin'
        })
    }
});

admin.get('/api/getusers', authenticator, (req, res) => {
    const { user } = req;
    if (user.admin) {
        User.find().then(users => {
            res.status(201).send({ 
                users
            });
        })
    }
});

admin.patch('/api/patchuser', authenticator, async (req, res) => {
    const admin = req.user;

    if (admin.admin) {
        const { userid } = req.query;

        User.findById(userid).then(async user => {
            const updates = Object.keys(req.body);
            const allowedUpdates = [
                'accountPlan',
                'lastname',
                'firstname',
                'balance', 
                'requirement',
                'notifications', 
                'transactions'
            ];
            
            const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
        
            if (!isValidOperation) {
                return res.status(400).send({ error: 'Invalid updates!' })
            }
        
            try {
                updates.forEach((update) => {
                    if (update === 'transactions') {
                        const { transactions } = req.body;

                        if (transactions.length) {
                            const transacs = user.transactions;
                            user.transactions = [...transacs, ...transactions];
                        }

                    } else if (update === 'notifications') {
                        const { notifications } = req.body;

                        if (notifications.length) {
                            const notifs = user.notifications;
                            user.notifications = [...notifs, ...notifications]
                        }
                    } else {
                        user[update] = req.body[update]
                    }
                })
                await user.save()
                res.send({
                    user_updated: user
                })
            } catch (e) {
                console.log(e);
                res.status(400).send(e)
            }
        })
    }
});

admin.post('/api/createasset', authenticator, async (req, res) => {
    const { user } = req;

    if (user.admin) {
        const asset = new Asset(req.body);

        try {
            await asset.save();
            res.status(201).send({ asset });

        } catch (e) {
            res.status(400).send({error: e});
        }
    }
});

admin.get('/api/assetsadmin', authenticator, async (req, res) => {
    const { user } = req;

    if (user.admin) {
        Asset.find().then(assets => {
            res.status(201).send({ 
                assets
            });
        })
    }
});

admin.patch('/api/updateasset', authenticator, async (req, res) => {
    const { user } = req;

    if (user.admin) {
        const { assetid } = req.query;
        const { nameOfAsset, priceInUSD, pricechangeIn24 } = req.body;

        Asset.findById(assetid).then(async asset => {
            asset.nameOfAsset = nameOfAsset;
            asset.priceInUSD = priceInUSD;
            asset.pricechangeIn24 = pricechangeIn24;

            await asset.save();

            res.status(201).send({ 
                asset
            });
        })
    }
})

admin.patch('/api/edituserassets', authenticator, async (req, res) => {
    const { user } = req;

    if (user.admin) {
        const { userid } = req.query;
        const assetBalances = req.body;

        User.findById(userid).then(async userdoc => {
            const assetBalancesArr = await assetBalances.map(({ 
                nameofAsset, 
                asset, 
                userbalanceOfAsset, 
                userbalanceOfAssetInUSD, 
                allocationInUserWallet, 
                locked  
            })  => {

                const assetBalanceItem = new AssetBalance({
                    asset,
                    nameofAsset,
                    userbalanceOfAsset,
                    userbalanceOfAssetInUSD,
                    allocationInUserWallet,
                    locked
                });

                return assetBalanceItem;
            });

            userdoc.assetsBalances = [...assetBalancesArr];

            await userdoc.save();

            res.status(201).send({ 
                user: userdoc
            });
        })
    }
})

export default admin;