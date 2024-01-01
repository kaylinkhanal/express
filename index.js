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

app.post('/register', (req, res) => {
//    console.log(req.body)
    const matchedList = users.filter((item,id)=>{
        if(item.name === req.body.name){
            return item
        }
    })
    if(matchedList.length>0) {
        res.json({
            msg: 'User already exist'
        })
    }else{
        res.json({
            msg: 'Registration successful'
        })
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
