const mongoose=require('mongoose')
require('dotenv').config()

const connectDB=async()={
    try {
        mongoose.connect(process.env.Mongo_URL)
        console.log("first")
    } catch (error) {
        console.log(error)
    }
}
module.exports=connectDB()
