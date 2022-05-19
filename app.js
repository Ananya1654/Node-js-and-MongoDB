const express=require("express")
var bodyParser=require('body-parser')
const app=express()
var urlencoderParser=bodyParser.urlencoded({extends:false})
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index1.html')
})

app.post('/',urlencoderParser,(req,res)=>{
    console.log("Result:",req.body)
    res.sendStatus(200)
})
app.listen(8000)