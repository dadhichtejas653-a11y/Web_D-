const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.set("view engine", "ejs");

mongoose.connect("mongodb+srv://dadhichtejas653_db_user:EA3vtLFr0ET15QR6@cluster0.uu8eebu.mongodb.net/?appName=Cluster0")
.then(() =>console.log("college DB Connected"))
.catch(err =>console.log(err));
// schema of students 
const studentsSchema = new mongoose.Schema({
    name: "String",
    age: Number,
    course: "String"
});
// model of students
app.use("/",express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const student = mongoose.model("student", studentsSchema);

app.get("/", async (req, res) => {
    //aync task. await.....
    let allStudent = await student.find();
    console.log(allStudent);

    allStudent = allStudent.filter((s) => s.age > 20);
    
    //let obj = {
     //   "name": "mayank",
  //      age: 22,
//    };
    //res.send("Home page");
    //res.send(obj);
    res.render("student.ejs", {allStudent});  // no .ejs extension needed
});



app.post("/createdata", async (req, res) => {
    let newStudent = new student({   
        name: "Tejas",
        age: 19,
        course: "B.Tech"
    });
    await newStudent.save();
    res.send("Data created successfully!");
});

app.listen(3000, () => console.log("Server running on port 3000"));  




