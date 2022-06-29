const express = require('express');// in cmd install npm i body-parser ,also install npm i nodemon 
const app = express();

const myroutes = require('./Routes/index');


const bodyParser = require('body-parser');//in cmd install npm i express --save
app.use(bodyParser.json());


app.use('/',myroutes); //this is the base route   
const port = 8900;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

