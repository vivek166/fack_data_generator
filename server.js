var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var path=require('path');

var faker = require('faker');

var mongodb     = require('mongodb');

var MongoClient = mongodb.MongoClient;

var dburl = "mongodb://localhost:27017/items";

var app = express()

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/', express.static(path.join(__dirname, '')));


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get('/',function (req,res) {
    res.sendFile(__dirname+"/index.html");
});

/*app.post('/',function (req,res) {
    res.json({"message":"post method is found"})
});*/
app.listen(3001,function () {
    console.log("server in running on port : 3001");
});
