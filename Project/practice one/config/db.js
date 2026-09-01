const mongoose = require("mongoose")


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/student_admin')
        console.log('MongoDB Connected!');
        
    } catch (error) {
        console.log('DB failed : ', error);
    }
}


module.exports = connectDB
