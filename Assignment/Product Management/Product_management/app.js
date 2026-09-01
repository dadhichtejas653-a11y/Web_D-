const express=require("express")
const app=express();
const connectDB = require("./config/db");
const logger = require("./middleware/logger");
const authHandler = require("./middleware/auth");
const errorHandler = require("./middleware/error");
const productroutes = require("./routes/productroutes");
const Port=4000;
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(logger);   
app.use(authHandler); 
app.use("/",productroutes);

app.use(errorHandler);

app.listen(Port,() => {
    console.log("Server running on port 4000");
});