const express = require('express');
const Mongo = require('../database/mongo');
const { Schema } = require('mongoose');
const route = express.Router();
const mongoose = require("mongoose");
slug = require('mongoose-slug-updater');
mongoose.plugin(slug);
const { faker } = require('@faker-js/faker');

const blogSchema = new Schema({
    title: String,
    description: String,
    excrpt: String,
    slug: {
        type: String,
        unique: true,
        required: true,
        slug: "title"
    },
    thumbnail_img: String,
    post_date: Date,
});

function stringToSlug(str) {
    if (!str) return "";

    return str
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/--+/g, "-");
}


route.get("/post", async (req, res) => {
    try {
        const db = await Mongo();
        const Posts = await db.model("posts", blogSchema);
        const post = Posts.find().exec();
        post.then((data) => {
            res.status(200).send({ "status": "success", "result": data });
        });
    } catch (err) {
        res.status(401).send({ "status": "failed" });
    }
});

route.post("/post", async (req, res) => {
    try {
        const db = await Mongo();
        const Posts = db.model("posts", blogSchema);

        const post = new Posts({
            title: req.body.title,
            description: req.body.description,
            excerpt: req.body.excerpt,
            slug: slug,
            thumbnail_img: req.body.thumbnail_img,
            post_date: req.body.post_date,
        });

        await post.save();
        return res.status(201).send({ status: "success", result: post });
    } catch (err) {
        console.error("Error creating post:", err);
        return res.status(500).send({ status: "failed", message: "Server error while creating post" });
    }
});


route.post("/post/fake", async (req, res) => {
    try {
        const db = await Mongo();
        const Posts = db.model("posts", blogSchema);
        let i = 0;
        while (i < 20) {
            const post = new Posts({
                title: faker.lorem.lines(1),
                description: faker.lorem.paragraph(2),
                excerpt: faker.lorem.lines(2),
                slug: slug,
                thumbnail_img: faker.image.avatar(),
                // post_date: faker.internet.email(),
            });

            await post.save();

            i++;
        }

        return res.status(201).send({ status: "success", result: "ok" });
    } catch (err) {
        console.error("Error creating post:", err);
        return res.status(500).send({ status: "failed", message: "Server error while creating post" });
    }
});


route.put("/post/:id", async (req, res) => {
    try {
        const db = await Mongo();
        const Posts = await db.model("posts", blogSchema);
        if (mongoose.Types.ObjectId.isValid(req.params.id)) {
            const result = await Posts.findById(req.params.id);
            result.title = req.body.title ? req.body.title : result.title;
            result.description = req.body.description ? req.body.description : result.description;
            result.excrpt = req.body.excrpt ? req.body.excrpt : result.excrpt;
            result.thumbnail_img = req.body.thumbnail_img ? req.body.thumbnail_img : result.thumbnail_img;
            result.save();

            res.status(200).send({ "status": "found", "result": result });
        } else {
            res.status(401).send({ "status": "ID not valid", });
        }

    } catch (err) {
        console.log(err);

        res.status(401).send({ "status": "failed" });
    }
});

module.exports = route;


