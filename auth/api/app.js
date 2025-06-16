const express = require('express');
const app = express();
const Mongo = require('./mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    phone: String
});

app.get("/", async (req, res) => {
    try {
        const db = new Mongo();
        const User = await db.model("users", userSchema);
        const user = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
        });
        user.save();
        
    } catch (err) {

    }
    res.send({ "status": "success" });
});

app.listen(3000);