const express = require('express');
const app = express();
require('dotenv').config();


// external routes
const userRoutes = require('./routes/user');
const blogRoutes = require('./routes/blogs');

app.use(express.json());
app.use(userRoutes);
app.use(blogRoutes);

app.get("", (req, res)=>{
    res.send({"message":"Home Page"});
});


app.listen(process.env.APP_PORT, () =>{
    console.log("App running on port: ", process.env.APP_PORT);
});
