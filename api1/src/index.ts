import express from "express";
const app = express();





app.get("/",(req,res)=>{
    res.send("Hello.this is the default gateway");
});

app.get("/health",(req,res)=>{
    res.send("The server is running well");
});

app.get("/ninja",(req,res)=>{
    res.send("Congrats on finding the secret passage");
});








app.listen(3000,()=>{
    console.log("SERVER CONNECTED ON PORT 3000")
})