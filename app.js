import express from 'express'

const app = express()
const port = 3001

app.get('/', (req,res) => {
    res.send("ANA SAYFA")
})

app.listen(port, () => {
    console.log(`${port} portu dinleniyor || ÇALIŞTI`)
})