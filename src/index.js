const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT
app.use(express.json())
const connection = require('./db/connection')
const User = require('./models/user')
connection()
app.post('/register', async(req, res) => {
   await User.create(req.body)
})

app.get('/users', async (req, res) => {
  const list = await User.find()
  if(list) res.json({list})
})


app.delete('/users/:id', async (req, res) => {
  try{
    const result = await User.findByIdAndDelete(req.params.id)
    if(result){
      res.json({msg: "deleted successfully"})
    }
  }catch(err){
    console.log(err)
  }
})


app.put('/users/:id', async (req, res) => {
  try{
    const result = await User.findByIdAndUpdate(req.params.id, req.body)
    if(result){
      res.json({msg: "edited successfully"})
    }
  }catch(err){
    console.log(err)
  }
})


app.patch('/users/:id', async (req, res) => {
  try{
    const result = await User.findByIdAndUpdate(req.params.id, {userName: req.body.userName})
    if(result){
      res.json({msg: req.body.userName + " has been edited  successfully"})
    }
  }catch(err){
    console.log(err)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
