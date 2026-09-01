const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.set('view engine','ejs')
app.use(express.urlencoded({ extended: true}))

mongoose.connect('mongodb://localhost:27017/Employee_Management_System')
 .then(() => console.log('MongoDb connected'))
 .catch((err) => console.log('db failed', err))

const employeeRoutes = require('./routes/employeeRoutes.js')

app.get('/', function(req,res){
    res.send('Server is running')
})

app.use('/employee', employeeRoutes)

app.listen(8080, '0.0.0.0', function() {
    console.log('server id running on port 8080');
})
