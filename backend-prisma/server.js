const express = require('express')
const cors = require("cors");
//const { PrismaClient } = require('@prisma/client');
// const { PrismaClient } = require("./generated/prisma");



const app = express();
const port = 5901;

const userRouter = require('./routes/user');
const activityRouter = require ("./routes/activity");

app.use(express.json());
app.use(cors());


app.use("/user", userRouter);
app.use("/activity", activityRouter);


app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
});
