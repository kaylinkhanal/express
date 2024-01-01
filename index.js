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

app.delete('/users/:id', (req, res) => {
    const filteredItem = users.filter((item,id)=>{
        return item.id != req.params.id
    })
    res.json(filteredItem)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
