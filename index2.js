const express = require("express");
const app= express();
import '.';

app.get("/",(req,res)=>{
res.json({
   message:"You are viewing this file from docker" 
});

});
app.get("/login",(req,res)=>{
res.json({
   message:"You are viewing Login page this file from docker" 
});

});
app.get("/signup",(req,res)=>{
res.json({
   message:"You are viewing Signup page this file from docker" 
});
});
app.get("/logout",(req,res)=>{
res.json({
   message:"You are viewing logout page this file from docker" 
});
});







app.listen(8000, ()=>{
    console.log("app is running in 8000")
})