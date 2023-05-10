import dotenv from "dotenv"
import connectToDatabase from "./database.js"
import express from "express"

dotenv.config()
connectToDatabase()
const app = express()

//middleware
app.use(express.json())
