const express = require('express');
const Mongo = require('../database/mongo');
const { Schema } = require('mongoose');
const route = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 12;
const jwt = require('jsonwebtoken');


const userSchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    lang: String
})

route.get("/user/:id", async (req, res) => {
    try{
        const db = await Mongo();
        const Users = await db.model("users", userSchema);
        const user = Users.findById(req.params.id).exec();
        user.then((data)=>{
           res.status(200).send({"status": "success", "result": data});
        });
    }catch(err){
        console.error(err);
        res.status(401).send({"status": "failed"});
    }
});

route.post("/user/register", async (req, res) => {
    try {
        const db = await Mongo();
        const User = await db.model("users", userSchema);
        User.exists({ "email": req.body.email }).then((data) => {
            if (data) {
                res.status(409).send({ "message": "email already registered" });
            } else {

                bcrypt.genSalt(saltRounds, function (err, salt) {
                    bcrypt.hash(req.body.password, salt, function (err, hash) {
                        const user = new User({
                            name: req.body.name,
                            email: req.body.email,
                            password: hash,
                            lang: req.body.lang
                        });
                        user.save();
                        let access_token = jwt.sign({ 'id': user._id, 'email': user.email }, 'shhhhh', {expiresIn: process.env.ACCESS_TOKEN_EXPIRATION });
                        let refresh_token = jwt.sign({ 'id': user._id, 'email': user.email }, 'shhhhh', {expiresIn: process.env.REFRESH_TOKEN_EXPIRATION });
                        res.status(201).send({ "message": "user registered successfully", "result": user, "access_token": access_token, "refresh_token": refresh_token});
                    });
                });

            }
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
        const result = User.findOne({ "email": req.body.email }).exec();
        
        result.then((data) => {
            bcrypt.compare(req.body.password, data.password, function (err, result) {
                if (result) {
                    // let token = jwt.sign({ 'id': data._id, 'email': data.email }, 'shhhhh');
                    let access_token = jwt.sign({ 'id': user._id, 'email': user.email }, 'shhhhh', {expiresIn: process.env.ACCESS_TOKEN_EXPIRATION });
                        let refresh_token = jwt.sign({ 'id': user._id, 'email': user.email }, 'shhhhh', {expiresIn: process.env.REFRESH_TOKEN_EXPIRATION });
                    res.status(201).send({ "status": "success", "message": "login successful", "access_token": access_token, "refresh_token": refresh_token });
                } else {
                    res.status(201).send({ "status": "success", "message": "password not match" });
                }
            });
        });
    } catch (err) {
        console.error("Error: ", err);
        res.status(400).send({ "status": "failed" });
    }
});

module.exports = route;