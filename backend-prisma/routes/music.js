const express = require("express");
const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();
const musicRouter = express.Router();


// Get all music
musicRouter.get('/', async (req, res)=>{
    try{
        const music = await prisma.music.findMany();
        return res.json(music);
    } catch(error) {
        console.error('Error fetching data: ', error);
        res.status(500).json({error: 'Internal server error'});
    }
});

// Get music by ID
musicRouter.get("/:id", async (req, res) =>{

    const musicId = Number(req.params.id);

    try {
        const music = await prisma.music.findUnique({
            where: {
                id: musicId,
            },
        });

        if (!music) {
            return res.status(404).json({
                success: false,
                message: "Music not found",
            });
        }
        res.status(200).json({
            success: true,
            music: music,
        });
    }catch (e) {
        console.error('Error fetching music by ID: ', e);
        res.status(500).json({
            "success": false,
            message: "Something went wrong, please try again later",
        });
    }
});


// Create new music
musicRouter.post("/", async function(req, res) {
    try {
        //Extract data from request body
        const musicData = req.body;

        const newMusic = await prisma.music.create({
            data: musicData,
        });

        res.status(201).json({
            success: true,
            music: newMusic,
        });
    } catch (error) {
        console.error('Error creating music: ', error);
        res.status(500).json({
            success: false,
            message: "Failed to create music",
        });
    }
});


// Update music by ID
musicRouter.put("/:id", async function(req, res) {
    const musicId = Number(req.params.id);

    try {
        const updatedMusic = await prisma.music.update({
            where: {
                id: musicId,
            },
            data: req.body,
        });

        res.status(200).json({
            success: true,
            music: updatedMusic,
        });
    } catch (error) {
        console.error('Error updating music: ', error);
        if (error.code === 'P2025') {
            return res.status(404).json({
                success: false,
                message: "Music not found",
            });
        }
        res.status(500).json({
            success: false,
            message: "Failed to update music",
        });
    }
});

// Delete music by ID
musicRouter.delete('/:id', async function(req, res) {
    const musicId = Number(req.params.id);

    try {
        await prisma.music.delete({
            where: {
                id: musicId,
            },
        });

        res.status(200).json({
            success: true,
            message: "Music deleted successfully",
        });
    } catch (error) {
        console.error('Error deleting music: ', error);
        if (error.code === 'P2025') {
            return res.status(404).json({
                success: false,
                message: "Music not found",
            });
        }
        res.status(500).json({
            success: false,
            message: "Failed to delete music",
        });
    }
});


module.exports = musicRouter;