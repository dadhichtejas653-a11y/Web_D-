const express=require("express");
const app=express();
const {auth,status}=require("./middleware/auth")
const {premium}=require("./middleware/premium");
const cookieParser = require("cookie-parser");
const port=3000;

// app.use((req,res,next)=>{
//     console.log("universal middleware..")
//     next();
// })
// app.use("/dhruv",(req,res,next)=>{
//     console.log("dhruv middleware");
//     next();

// })
// const login=(req,res,next)=>{
//     console.log("login middleaew");
//     //logic of authentication
//     next();
// };
// const a=90;
// const b=89;

app.use(cookieParser());
app.get("/",(req,res)=>{
    console.log("hello world..");
    res.cookie("userID","vikas0799");
})

// app.get("/",auth,(req,res)=>{
//       console.log(status);
//     //   res.cookie("userID",145234);
//     console.log(req.cookies)
//     // res.send("home route");
//     res.send(req.cookies);
// })

// app.get("/jiopremium",premium,(req,res)=>{
//     res.send("premium page");
// })

// app.get("/payment",login,(req,res)=>{
//     res.send("payment route");
// })
app.listen(port,()=>{
    console.log(`server is running at door/port  no ${port} `);
})
