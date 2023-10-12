const express = require("express");
const path  = require("path");
require("./db/conn");
// const res = require("express/lib/response");
const app = express();
const port = process.env.PORT || 3000;
//path
const staticpath = path.join(__dirname, "../public");

//static site
app.use(express.static(staticpath));

app.get("/",(req, res)=>{
    res.send("Hi Vicky");
})

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})