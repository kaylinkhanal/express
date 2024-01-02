const mongoose = require('mongoose')

const connection = async()=> {
    //handling promise with async await
    //async ===> aync await, callback, .then chain, settimeout...
    const isConnected  = await mongoose.connect('mongodb://127.0.0.1:27017/broadwayDb');
    if(isConnected){
        console.log("Connected to mongodb")
    }else{
        console.log("connection issue")
    }
}

module.exports = connection
