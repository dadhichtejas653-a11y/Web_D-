const express = require('express');
const app = express();
const user = 5000;

app.get("/", (req, res) => {
    res.json({
        "name": "PARTH SHARTIYA",
        "college": "Hi-tech college of engineering",
    });
})

app.get("/result/:year/roll", (req, res) => {
    console.log(req.params);
    res.send("fail hai.. ahahhahhahah")
    })


app.get("/search", (req, res) => {
    console.log(req.query);
    res.send("data mil gya.. ahahhahhahah")
})

app.listen(user, () => {
    console.log(`Server is running on port ${user}`);
})