const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")
require("dotenv").config();

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API Running")
})

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Mongodb Connected"))
.catch((err) => console.log(err))

const inquiryroute = require("./routes/inquiryroute")
app.use("/api", inquiryroute)

app.listen(5000, () => {
    console.log('Server running on port 5000')
})
