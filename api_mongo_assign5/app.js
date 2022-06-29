const express = require("express");
const mongoose = require("mongoose");
const app = express();
const myroutes = require('./Routes/index');

const bodyParser = require('body-parser');//in cmd install npm i express --save
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://root:1890alvin@cluster0.s1zt0.mongodb.net/zomato?retryWrites=true&w=majority", // now we are connected to cloud database zomato
{
useNewUrlParser:true,
useUnifiedTopology:true
}
).then(sucess=>{
    console.log("sucessfully connected to db");
    const port = 8900;
    app.listen(port,()=>{
        console.log("server is running in",port);
    });
    

}).catch(error=>{
    console.log("error in connection",error);
});

app.use('/',myroutes); 

