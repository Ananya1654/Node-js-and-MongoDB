var mongoose=require("mongoose")
//creating a schema
var employeeSchema=new mongoose.Schema({
    name:String,
    email:String,
    etype:String,
});

var employeeModel=mongoose.model('Employee',employeeSchema)
var employees=new employeeModel({
    name:'Ananya',
    email:'ss@gmail.com',
     etype:'temp'

})
console.log(employees)