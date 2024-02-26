const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.send('hola app express con github actions!!')
})

app.listen(port,()=>{
    console.log('mi port' + port)
})