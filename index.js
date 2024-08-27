import express from 'express';
import dotenv from 'dotenv';
import fs from  'fs';
import path from 'path';
import { error } from 'console';
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


dotenv.config();
let quotes=[]
const app=express();
fs.readFile('quotes.json','utf-8',(err,data)=>{
    if(err){
        console.log('error')
        return
    }
    quotes = JSON.parse(data);
    console.log('done')
})
app.get('/',(req,res)=>{
    res.send(" THIS IS AN API THAT WORKS FOR THE QUOTES OF BHAGVADGITA")

})
app.get('/api/quote/',(req,res)=>{
    const randomInt = getRandomInt(1, 147);
    res.json(quotes[randomInt])
})
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})
