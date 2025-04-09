const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/book-routes')
const cors = require('cors');
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://polamarasettidurgarao00008:7997@cluster0.zfnfuny.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { dbName: "book" })
    .then(() => {
        console.log("Db is connected")
    }).catch((e) => {
        console.log(e.message)
        console.log("Db is failed in connection")
    })


//middleware
app.use('/books', router)



app.listen("3001", () => {
    console.log("server is running !!")
})