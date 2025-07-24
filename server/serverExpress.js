const express = require('express')
const app = express()
const port = 3030
app.get('/',(req,res)=>{
    res.send('Hello Word')
})

app.listen(port,()=>{
    console.log(`El servidor se esta corriendo en el puerto ${port}`);
    
})