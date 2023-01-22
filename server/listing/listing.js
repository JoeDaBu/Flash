import express from 'express';
import { getListing } from '../listing.js';
import { PrismaInstance } from '../utils/prisma.js';   

const prismaInstance = new PrismaInstance();
prismaInstance.createInstance();

const client = prismaInstance.getInstance();

const router = express.Router();

router.get('/listing', async (req, res) => {

    const listing = await client.listing.findUniqueOrThrow({
        where: {
            listing_id: req.body.listing_id
        }
    })

    return res.send(listing);
})

router.put('/listing', async (req, res) => {
    //const data = req.body;

    const listing = await client.listing.upate({
        where: {
            listing_id: req.body.listing_id
        },
        data: {
            ...req.body
        }
    })

    return res.send(listing);
})

router.post('/listing', async (req, res) => {

    const newListing = await client.listing.create({
        data: {
            ...req.body
        }
    })

    return res.send(newListing);
})

export default router;