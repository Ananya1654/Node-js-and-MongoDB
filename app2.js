var express=require("express")
var mongoose=require("mongoose")
var bodyParser=require("body-parser")
const app=express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))
mongoose.connect("mongodb://localhost:27017/test3")
var db=mongoose.connection
db.on('error',()=>console.log('error connection'))
db.once('open',()=>console.log('connected db'))
app.post('/sign_up',(req, res)=>{
    var name=req.body.name
    var Course=req.body.Course
    var age=req.body.age
    var email=req.body.email

    var data={
        "name":name,
        "Course":Course,
        "age":age,
        "email":email
    }
    db.collection('playlist').insertOne(data, (err,collection)=>{
        if(err){
            throw err;
        }
        console.log("document inserted successfully")
    })
    return res.redirect('signup_success.html')
})
app.get('/',(req, res)=>{
    return res.redirect('index2.html')
}).listen(2000);
console.log("Listening")