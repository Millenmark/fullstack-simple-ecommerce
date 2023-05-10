import dotenv from "dotenv"
import connectToDatabase from "./database.js"
import express from "express"

dotenv.config()
connectToDatabase()
const app = express()
const port = process.env.PORT || 5000;


//middleware
app.use(express.json())



//routes
app.get("/", (req, res) => {
  res.send("Hello World")
})


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})