'use strict';


const express = require('express');


const server = express();


const PORT = 3000;
server.get('/hi',(req,res)=>{
   let family = [
       {name:'mo'},
       {name:'obay'},
       {name:'ahamd'},
       {name:'raed'}
   ];
    res.send(family);
})
server.use(express.static('./public'));

server.listen(PORT,()=>{
    console.log(`suhaib ${PORT}`)
})