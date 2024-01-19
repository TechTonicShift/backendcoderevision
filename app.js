const express = require('express');
const mongoose = require('mongoose');
const PORT=4000;
const app= express();
const users=[];
const path= require('path');
// console.log(path.join(__dirname,);
const currentWorkingDirectory=process.cwd();
const indexpath= path.join(currentWorkingDirectory, 'index.html');

//Setting EJS as the view engine
app.set('view engine', 'ejs');


// Connect to MongoDB
mongoose.connect('mongodb://localhost:12707',{
    dbName: 'FirstDB',
}).then(()=>{
    console.log('Connected to MongoDB');
}).catch(err=>{
    console.error('Error connecting to MongoDB');
});


//Defining message schema 
const messageSchema = new mongoose.Schema({
    name:String,
    email:String
});

const Message = mongoose.model('Message', messageSchema);



app.get('/',(req,res)=>{
    res.send("Hello, world!");
})
app.get('/json',(req,res)=>{
    res.json({
        success:true,
        "name":"Utkarsh",
        "college":"MNNIT",
        users,
    })
})
app.get('/page',(req,res)=>{
    res.sendFile(indexpaths);
});
app.get('/ejs',(req,res)=>{
    res.render('index',{
        title:"Hello World"
    })
});

app.get('/login',(req,res)=>{
    res.render('login')
});
app.get('/add', (req, res) => {
    Message.create({
        name:"Abhi",
        email:"abhi@gmail.com",
    }).then(()=>{
        res.send("Nice");
    })
})
app.get('*',(req,res)=>{    //This * should be at lowest of all routes 
    res.status(404).send("Not Found");
})
app.listen(4000,()=>{
    console.log('Hello on port '+PORT);
})