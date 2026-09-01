// app.use(cookieParser("viet123"));

const auth=(req,res,next)=>{

   

    // console.log("login middleaew");
    //logic of authentication
    // res.cookie("username","harsh07");
    // res.cookie("inta_iD","vikas-799");

    next();
};

const status=true;

module.exports={auth,status};