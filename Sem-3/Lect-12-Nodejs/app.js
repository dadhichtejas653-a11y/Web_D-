const express = require('express');
const app = express()
const port = 3000
app.set('view engine',"ejs")
app.use(express.json())
app.use(express.urlencoded({ extended : true }))



app.get('/', (req, res) => {
    // let obj={
    //     "name":"prince",
    //     "age":23
    // }
//   res.send('Hello World!')
// res.send(obj)
// console.log(req);
// console.log(res);
// console.log(req.ip);
// console.log(req.url);
// console.log(req.query);

console.log(req.body);

// res.send("hello");
res.render("index")


})

app.post('/register',(req,res)=>{
    console.log(req.body);
    res.send("Hogaya")
    
})

app.get('/register',(req,res)=>{
    res.render("form")
    
})

app.get('/user/:id/:commentid',(req,res)=>{
    console.log(req.params);
    res.send(req.url)
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})