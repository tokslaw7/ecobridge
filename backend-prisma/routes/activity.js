const express = require("express");
const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();
const activityRouter = express.Router();



activityRouter.get('/', async (req, res)=>{
    try{
        const activity = await prisma.activity.findMany();
        return res.json(activity);
    } catch(error) {
        console.error('Error fetching data: ', error);
        res.status(500).json({error: 'Internal server error'});
    }
});

activityRouter.get("/:id", async (req, res)=>{

        const activityId = Number(req.params.activityId);

        try {
            const activity = await prisma.activity.findUnique({
                where: {
                    id: activityId,
                },
                data: {
                    activity: true,
                },
            });

            res.status(200).json({
                "success": true,
                activity: activityId,
            });
        }catch (e) {

            res.status(500).json({
                "success": false,
                message: "Something went wrong, please try again later",
            });
        }
});



activityRouter.post("/", async function (req, res)
{
    try {
        //Extract data from request body
        const activityData = req.body;

        const newActivity = await prisma.activity.create({
            data: activityData,
        });

        res.status(201).json({
            success: true,
            music: newActivity,
        });
    } catch (error) {
        console.error('Error creating activity: ', error);
        res.status(500).json({
            success: false,
            message: "Failed to create activity",
        });
    }
});
// activityRouter.put("/:id", async function(req, res){
//     res.status(200).json({
//         success: true,
//     });
// }
// );

activityRouter.delete('/:id', async function(req,res){
    res.send("Delete activity").end();
})


module.exports = activityRouter;