import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import conn from "./db.js"
import pageRoute from './route/pageRoute.js'

dotenv.config();

conn();


const app = express()
const port = process.env.PORT

//ejs template engine
app.set('view engine', 'ejs')

app.use('/', pageRoute)

app.listen(port, () => {
    console.log(`${port} portu dinleniyor || ÇALIŞTI`)
})