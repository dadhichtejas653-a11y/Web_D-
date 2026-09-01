const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.set("view engine", "ejs");

mongoose.connect("mongodb://127.0.0.1:27017/CollegeDB")
.then(() =>console.log("college DB Connected"))
.catch(err =>console.log(err));
// schema of students 
const studentsSchema = new mongoose.Schema({
    name: "String",
    age: Number,
    course: "String"
});
// model of students
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
app.listen(3000, () => console.log("Server running on port 3000"));