const premium=(req,res,next)=>{
    console.log("premium service ..");
    next();
}

module.exports={premium};