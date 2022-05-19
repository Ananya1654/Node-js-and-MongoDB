const express=require("express")
const app=express()
var bodyParsar=require('body-parser')
var urlencoderParser=bodyParsar.urlencoded({extend:false})
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.post('/',urlencoderParser,(req,res)=>{
    console.log('dta:',req.body)
    res.sendStatus(200)
})
app.listen(1000,()=>console.log("Server Started"))
