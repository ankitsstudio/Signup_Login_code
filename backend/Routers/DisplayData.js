const express = require("express");
const app = express();
const mongoose= require("mongoose")

app.post('/langData',async (req,res) => {
    try {
        const {cat,difficulty}= req.body
        const fetchedData = await mongoose.connection.db.collection("sql_lang");
        const wdata = await fetchedData.find({}).toArray();
        const data = wdata.filter((ele)=>{
            return (ele.category===cat && ele.difficulty===difficulty)
        })

        // res.send([global.whole_data,global.catData, global.diff_data]);
       return res.send([data,global.catData]);
    } catch (error) {
        res.send("server error")
    }
})

module.exports = app;