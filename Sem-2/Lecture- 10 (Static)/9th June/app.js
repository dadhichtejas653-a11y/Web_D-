const express=require("express");
const app=express();
const port=3030;
const fs=require("fs");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",express.static("Public"));

app.get("/",(req,res)=>{
    console.log("home page...");
    res.sendFile(__dirname + "/Public/index.html");
})

app.get("/data",(req,res)=>{
    res.sendFile(__dirname + "/Public/users.json");
})

app.post("/register",(req,res)=>{
    console.log(req.body);
    fs.appendFileSync("data.json",JSON.stringify(req.body)+"\n","utf-8");

    res.send("user registration complete..")
    
})

app.listen(port,()=>{
    console.log("server is running");
    
})