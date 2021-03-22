// 'use strict';


// const express = require('express');


// const server = express();


// const PORT = process.env.PORT || 3000;
// server.get('/hi',(req,res)=>{
//    let family = [
//        {name:'mo'},
//        {name:'obay'},
//        {name:'ahamd'},
//        {name:'raed'}
//    ];
//     res.send(family);
// })
// server.use(express.static('./public'));

// server.listen(PORT,()=>{
//     console.log(`suhaib ${PORT}`)
// })
'use strict'

require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/hello', (request, response) => {
  response.status(200).send('Hello');
});

app.get('/data', (request, response) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well Trained',
  };
  response.status(200).json(airplanes);
});

app.use('*', (request, response) => response.send('Sorry, that route does not exist.'));

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));