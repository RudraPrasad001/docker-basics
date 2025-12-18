import express from "express";
import pool from "./db/db.ts"
const app = express();





app.get("/",(req,res)=>{
    res.send("Hello.this is the default gateway");
});

app.get("/health",async(req,res)=>{
    const result = pool.query("SELECT NOW()");
    res.send((await result).rows[0]);
});

app.get("/ninja",(req,res)=>{
    res.send("Congrats on finding the secret passage");
});








app.listen(3000,()=>{
    console.log("SERVER CONNECTED ON PORT 3000")
})