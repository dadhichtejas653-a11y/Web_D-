const express=require("express");
const app=express();
const cookieParser = require("cookie-parser");
const {auth,status}=require("./middleware/auth");
const {premium}=require("./middleware/premium");
const session=require("express-session");
const port=3000;

// app.use(cookieParser());
app.use(cookieParser("viet123"));

//for session 
// app.use(session({
//     secret:"mysecret",   //emailID
//     resave:false,
//     saveUninitialized:true,
//     maxAge:60*60*24*1000 //5 minutes
// }));
// const session = require("express-session");

app.use(session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: true,

    // cookie: {
    //     maxAge: 1000   // 1 day
    // }
}));




app.get("/", (req,res) => {
req.session.username="vikas0799";
res.send("Session set");
});


app.get("/get", (req,res) => {
    console.log(req.session);
    console.log(req.sessionID);
   console.log(req.session.username);
   if(req.session.username==undefined){
    throw new Error("session expired..");
    
   }
   else{
res.send(req.session.username);

   }
});
// app.get("/",(req,res)=>{
    
      //sessuonID

    //   res.send(req.sessionID);
    //  const username = req.signedCookies.username;
    //  console.log("bye");
    // console.log(username);
    
    
    // if(username=="saif099"){
    //     console.log("user welcome");
    // res.send("home route...");

        
    // }else{
    //     throw console.error("invalid username");
        // res.status(404).send("user not valid");

    // }
    // console.log("hello world..");
    // res.cookie("userID","vikas0799");
    // console.log(req.cookies);

    // res.cookie("username","saif099",{signed:true});
    // console.log(req.signedCookies);

// })

app.listen(port,()=>{
    console.log(`server is running at door/port  no ${port} `);
})
