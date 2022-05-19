var mongoose=require("mongoose")
//connecting to mongodb server
//below code is prommises
mongoose.connect('mongodb://localhost:27017/test3')
.then(()=>console.log("connected"))
.catch((err)=>console.log(err))
//creating a schema
var firstSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const Firstlist=new mongoose.model("pkaylist",firstSchema)
var nodeList1=new Firstlist({
    name:'Ananya',
    place:'bhuj',
    age:22

})
var nodeList2=new Firstlist({
    name:'suresh',
    place:'mandvi',
    age:23
})
Firstlist.insertMany([nodeList1,nodeList2])