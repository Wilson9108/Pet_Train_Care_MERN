const mongoose = require("mongoose")

 function connectMongo(url){
    try{
        return mongoose.connect(url).then(()=>console.log("database connected successfully")).catch((err)=>console.log(err.message))

    }catch(e){
        console.log(e.message)
    }
    
}


module.exports = {connectMongo}