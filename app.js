require("dotenv").config()

const express = require("express");
const cors = require("cors");
const app = express();
const dbConnect= require('./config/mongo') 

app.use(cors())
app.use(express.json())
app.use(express.static("storage"))

const port = process.env.PORT || 3000;

/**
 * Aquí invocamos las rutas
 */

app.use("/api", require("./routes/"))



app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})

dbConnect()

/**
 * Curso quedó en minuto 1:24:00
 * https://youtu.be/xRXHQlqA3Ak?si=oynqSvig-CWFTaSs&t=5060
 */