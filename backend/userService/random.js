// MERN 
// mongo db express library

const express =require('express') //1. importing library
// const abc=require('./xyz')
require('dotenv').config()
const app=express() //2. declaring an instance of method of the library

const helloRoutes=require('./routes/hello.route')
app.use('/',helloRoutes)

//4 kinds of requests (CRUD Applications: create read update delete): GET(read the data), 
//POST(enter the data), PUT(update), DELETE(deletion of data)
const person=[
    {
        id: 1,
        name: "Vidhika",
        email: "vidhikamangla@gmail.com"
    },
    {
        id: 2,
        name: "Garvita",
        email: "garvitamangla12@gmail.com"
    },
    {
        id: 3,
        name: "Sanya",
        email: "sanya.goel.22cse@bmu.edu.in"
    }
]

const about=[
    {
        id: 1,
        name: "Vidhika",
        height: "153 cm",
        weight: "44kgs"
    },
    {
        id: 2,
        height: "154 cm",
        weight: "50kgs"
    },
    {
        id: 3,
        name: "Sanya",
        height: "163 cm",
        weight: "52kgs"
    }
]

app.get('/hello',(req,res)=>{
    try{
        res.send('Hello World!!!')
    }catch(err){
        res.send('Something went wrong :(')
    }
    
}) 

//get method; 2 parameters: routing information (path), callback function (jahan acual code ka implementation hoga)
//http req http req
//concept block use karenge and try catch, har jagah (not mandatory)
app.get('/alluser',(req,res)=>{
    try{
        res.send(person)
    }catch(err){
        res.send("Error loading all users.")
    }
})

//name ko grab karne ke liye we'll use params 
app.get('/alluser/:name',(req,res)=>{
    try{
        let nm=req.params.name
        //Logic
        // const personData =  person.find((p)=>{
        //    return p.name===nm;
        // })

        for(let  i=0;i<person.length;i++){
            if(person[i].name===nm){
                res.send(person[i]);
            }
        }
        // const personData =  person.find((p)=>p.name===nm
        // )
        // res.send(personData)
    }catch(err){
        res.send("Error loading all users.")
    }
})

app.get('/about',(res,req)=>{
    try{
        res.send(about)
    }catch(err){
        res.send("Error loading about.")
    }
})

//app.listen(3000) //3. starting of that server //code's gonna run at port 3000 
app.listen(process.env.PORT,()=>{
    console.log('Server started at port ${process.env.PORT}')
})