const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.json()); //for JSON data parsing
app.use(express.urlencoded({ extended: true })); // for application


mongoose.connect("mongodb+srv://dadhichtejas653_db_user:EA3vtLFr0ET15QR6@cluster0.uu8eebu.mongodb.net/")
    .then(() => console.log("Database connected successfully to the notes.."))
    .catch(err => console.log(err));

    //Schema
    const notes = new mongoose.Schema({
    task_name: {
        type: String,
        required: true,
        minlength: 3,

    },
    task_deadline: {
        type: Number,
        min: 1,
        max:8,
        required:true
    },
    description: {
        type: String,
        // minlength: 0,
        required: false
    },
    priority:{
        type: String,
        enum: ["Low", "Medium", "High"],
        default: "Medium"
    }

});

//model
const note = mongoose.model("notes", notes);


app.get("/", (req, res) => {
    res.redirect("/todos");
})
app.get("/todos", async (req,res)=>{
    let tasks = await note.find();
    res.render("todos.ejs",{tasks})
})
app.post("/todos/add", async (req,res)=>{
    
    let data = await note.create({
        task_name:req.body.task_name,
        task_deadline: req.body.task_deadline,
        description: req.body.description,
        priority: req.body.priority
    })
    console.log(data);
    
    res.redirect("/todos")
})
app.post("/todos/:id/update", async (req, res) => {
    await note.findByIdAndUpdate(req.params.id, {
      task_name: req.body.task_name,
      task_deadline: req.body.task_deadline,
      description: req.body.description,
      priority: req.body.priority
    });
    res.redirect("/todos");
})
app.post("/todos/:id/delete", async (req, res) => {
    await note.findByIdAndDelete(req.params.id);
    res.redirect("/todos");
  });

app.listen(port,()=>{
    console.log("Server is running perfectly healthy..(good job 👍🏻)");
    
});