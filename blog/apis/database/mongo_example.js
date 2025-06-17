const mongoose = require('mongoose');

async function connect(){
    try{
        return await mongoose.connect("");
    }catch(err){
        console.error(err);
    }
}

module.exports = connect;