const express = require('express');
const Mongo = require('../database/mongo');
const { Schema } = require('mongoose');
const route = express.Router();

const userSchema = new Schema({
    name: String,
    email: { type: String, unique: true},
    password: String,
    lang: String
})

route.get("/user/:id", async (req, res) => {
    res.send({ "message": "ok" });
});
route.post("/user/register", async (req, res) => {
    try {
        const db = await Mongo();
        const User = await db.model("users", userSchema);
        const result = User.find().exec();
        result.then((data) => {
            res.status(200).send({ "message": "user registered", "user": data });
        });
    } catch (err) {
        console.error("Error: ", err);
        res.status(400).send({ "status": "failed" });
    }
});

route.post("/user/login", async (req, res) => {
    try {
        const db = await Mongo();
        const User = await db.model("users", userSchema);
        const result = User.findOne({"email": req.body.email}).exec();
        result.then((data)=>{
            if(data && data.password === req.body.password){
                res.status(201).send({"status": "success", "message":"login successful"});
            }else{
                res.status(201).send({"status": "success", "message":"password not match"});
            }
        });
    } catch (err) {
        console.error("Error: ", err);
        res.status(400).send({ "status": "failed" });
    }
});

module.exports = route;