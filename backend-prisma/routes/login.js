const express = require("express");
const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();
const loginRouter = express.Router();

loginRouter.get ("/login", async  function(req, res){
    const user = await prisma.user.findMany({
        data: {
            email: req.body.email,
            password: req.body.password
        }

    })
    res.json({
        "success": true,
        user
    })

})


loginRouter.post ("/login", async function(req, res){
    if(!req.body.email || !req.body.password){
        res.status(400).json({
            Message: "Missing some required fields"
        })
    }
    const newLoginUser = await prisma.user.create({
        data: {
            email: req.body.email,
            password: req.body.password,
            username: req.body.username
        }
    })
    res.status(201).json({
        "success": true,
        user: newLoginUser
    });
})

loginRouter.put ("login/:id", async function(req, res){
    res.status(200).json({
        "success": true,
    });
})

loginRouter.delete('/login', async function(req,res){
    res.send("Delete login").end();
})


module.exports = loginRouter;


// userRouter.get('/user', async (req, res)=>{
//     try{
//         const user = await prisma.user.findMany();
//         return res.json(user);
//     } catch(error) {
//         console.error('Error fetching data: ', error);
//         res.status(500).json({error: 'Internal server error'});
//     }
// });

// userRouter.get("user/:id", async (req, res)=>{
//
//         const userId = Number(req.params.userId);
//
//         try {
//             const user = await prisma.user.findUnique({
//                 where: {
//                     id: userId,
//                 },
//                 data: {
//                     user: true,
//                 },
//             });
//
//             res.status(200).json({
//                 success: true,
//                 user: userId,
//             });
//         }catch (e) {
//
//             res.status(500).json({
//                 success: false,
//                 message: "Something went wrong, please try again later",
//             });
//         }
// });

