import express from "express";
import dotenv from "dotenv";
import cors from 'cors';


dotenv.config()

const app = express()
const port = process.env.PORT || 5005

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.listen(port, () => console.log('Server started on port ${port}'))