const express=require("express");
const app=express();
const port=3000;

app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    console.log("home page...");
    // res.send("hhhh..")
    res.render("user");
    
})
let Parth={
    name:"Parth",
    age:22,
    city:"Ahmedabad"
}
 
let color = "red";
let flag = 5;

app.get("/",(req,res)=>{
    res.render("user",{Parth,color,flag});
})






app.listen(port,()=>{
    console.log("server is running");
    
})