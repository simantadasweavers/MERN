const mongoose = require('mongoose');

async function connect(){
    return await mongoose.connect("mongodb+srv://shimantadas:dQ30F63K7ynCOjC1@cluster0.v0jfth5.mongodb.net/test1?retryWrites=true&w=majority&appName=Cluster0");        
}

module.exports = connect;