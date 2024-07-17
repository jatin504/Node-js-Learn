// const { Console } = require('console')
// const fs=require('fs')

// fs.writeFile("hey.txt","hello world",function(err){
//     if (err) Console.error(err);
//     else console.log("done")
// })

// fs.appendFile("hey.txt","append file done",function(err){
//     if (err) Console.error(err);
//     else console.log("done")
// })

// fs.rename("hello.text","hello.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done")
// })

// fs.copyFile("hello.txt","./copy/newfile.txt",function(err){
//     if(err) console.error(err.message);
//     else console.log("done")
// })

// fs.unlink("hello.txt",function(){
//     if(err) console.error(err);
//     else console.log("done")
// })

// creatingserver

// const http = require('http');

// const server = http.createServer(function(req,res){
//     res.end("hello world")

// })

// server.listen(3000);


// express js 

const express = require('express')

const app = express();


//middleware
app.use(function(req, res, next){
    console.log("middleware")
    next();
});

//creates a routes

app.get("/",function(req, res){
    res.send("home page")
})

// routing
app.use(function(req,res, next){
    console.log("middle ware 2 ")
    next();
})
app.get("/about",function(req,res){
    res.send("about page")
})

// error handling 
app.get("/profile", function(res, res, next){
    // res.send("profile page")
    return next(new Error("something went wrong"));
})

app.use((err, req, res, next)=>{

    console.error(err.stack)
    res.status(500).send('something broke')
});

app.listen(3000);

