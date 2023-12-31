const express = require('express')
const app = express()
const port = 5000

const users =[
    {name:'ram', address:'ktm'},
    {name:'kaylin', address:'gorkha'},
    {name:'bishwo', address:'gorkha'},
    {name:'gopal', address:'ktm'}
]

app.get('/users', (req, res) => {
   const filteredUser =  users.filter((item,id)=>{
      if(item.name[0] ===req.query.startswith &&  item.name[item.name.length-1] ===req.query.endswith){
        return item
      }  
    })
    res.send(filteredUser)
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
