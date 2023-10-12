const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/serviceWeb",{

}).then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log(console.error());
})