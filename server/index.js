const express = require('express')
const cors = require('cors')
const {MongoClient} = require('mongodb')

const app=express()
app.use(cors())
app.use(express.json())
const client = new MongoClient('mongodb+srv://admin:admin@cluster0.dj5uvwi.mongodb.net/?retryWrites=true&w=majority')
client.connect()
const db = client.db('counselling1')
const col = db.collection('Register')
//col.insertOne({'student':"123"})

app.post('/register',(req,res)=>{
    co1.insertOne(req.body)
    res.send('inserted successfully')
})
app.get('/retrieve',async (req,res)=>{
    const result = await col.find().toArray()
    console.log(result)
    res.send(result)
})



app.get('/',(req,res)=>{
    res.send('<h1><center>Hello World</center></h1>')
})
app.get('/about',(req,res)=>{
    res.send('<h1><center>This is about page</center></h1>')
})
app.listen('8080', ()=>{
    console.log('server is running')
})