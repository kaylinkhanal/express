const express = require('express')
const app = express()
const port = 5000

const users =[
    {id:323,name:'ram', address:'ktm'},
    {id:511,name:'kaylin', address:'gorkha'},
    {id:56,name:'bishwo', address:'gorkha'},
    {id:456,name:'gopal', address:'ktm'}
]

app.post('/register', (req, res) => {
   console.log(req)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
