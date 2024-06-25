require("dotenv").config()

const express = require("express");
const cors = require("cors");
const app = express();
const dbConnect= require('./config/mongo') 

app.use(cors())

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})

dbConnect()

/**
 * Curso quedó en minuto 45:00
 * https://youtu.be/xRXHQlqA3Ak?si=qxUbpVrJ_7cK_Sau&t=2758
 */