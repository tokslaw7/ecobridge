const express = require("express");
const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();
const musicRouter = express.Router();



musicRouter.get('/', async (req, res)=>{
    try{
        const music = await prisma.music.findMany();
        return res.json(music);
    } catch(error) {
        console.error('Error fetching data: ', error);
        res.status(500).json({error: 'Internal server error'});
    }
});

musicRouter.get("/:id", async (req, res) =>{

    const musicId = Number(req.params.musicId);

    try {
        const music = await prisma.music.findUnique({
            where: {
                id: musicId,
            },
            data: {
                music: true,
            },
        });

        res.status(200).json({
            success: true,
            music: musicId,
        });
    }catch (e) {

        res.status(500).json({
            "success": false,
            message: "Something went wrong, please try again later",
        });
    }
});



musicRouter.post ("/", async function(req, res) =>{
        res.status(200).json({
            "success": true,
        });
    });


musicRouter.put("/:id", async function(req, res) => {
    res.status(200).json({
        "success": true,
    });
});

musicRouter.delete('/:id', async function(req,res) => {
    res.send("Delete music activity").end();
});


module.exports = musicRouter;