const express = require('express')
const app = express()
const port = 5000
app.use(express.json())
const users =[
    {id:323,name:'ram', address:'ktm'},
    {id:511,name:'kaylin', address:'gorkha'},
    {id:56,name:'bishwo', address:'gorkha'},
    {id:456,name:'gopal', address:'ktm'}
]

app.put('/users/:id', (req, res) => {
    const updatedUser = users.map((item,id)=>{
        if(item.id == req.params.id){
           item.name = req.body.name
           item.address = req.body.address
        }
        return item
    })

    res.json(updatedUser)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
