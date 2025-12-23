const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    try {
        res.send({message:'Server Running'});
    } catch (error) {
        res.status(500).send({message:'Server have some Error',errorMessage:error});
    }
})

app.get('/health',(req,res)=>{
    try {
        res.send({message:'Server Health is OKK'});
    } catch (error) {
        res.status(500).send({message:'Server Unhealthy',errorMessage:error});
    }
})

const port = 3000;

app.listen(port,()=>{
    console.log(`App listen at PORT:${port}`);
})