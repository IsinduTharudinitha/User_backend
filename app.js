//   XO3Xgarr4wQTXRtQ

const express = require('express');
const mongoose = require('mongoose');
const router = require('./Routes/UserRoutes');

const app = express();

app.use(express.json());
app.use("/users", router);


mongoose.connect("mongodb+srv://admin:XO3Xgarr4wQTXRtQ@cluster0.uae7ifg.mongodb.net/")
.then(() => console.log("Connected to MongoDB"))
.then(()=> {
    app.listen(5000);
})

.catch(err => console.log(err));
