const express  = require('express')
const app = express();
const server = require('http').Server(app);
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const fetch = require("node-fetch");
let MongoClient = require('mongodb').MongoClient;

///gor det vi vill fast bakofram

var module = require('./public/module.js');
module.myvar = 'Hello world';
module.test();

//alltsa skickar info fran module-script-fil till js fil


const url = "mongodb+srv://test:test@cluster0.zxzkx.mongodb.net/form?retryWrites=true&w=majority"

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const formSchema = new mongoose.Schema(
    {
        data: Object,
    },
    {collection:"survey_form"}
);

const Form = mongoose.model("Form", formSchema)

const formData = (theData) =>{
    Form({data:theData}).save((err) =>{
        if(err){
            throw err;
        }
    })
}

const urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use(express.json());
app.set("view engine", "ejs")
app.use(express.static("public"));


app.get("/", (req, res)=> {
    MongoClient.connect(url, function(err, db) {
        console.log("hello10")
        var dbo = db.db("form");
        console.log(dbo.collection("survey_form").findOne({name: req.params.data},
             function(err, result){console.log(result)}))
    });

    res.render("index");
})


// app.get('/', (req, res) => {
//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("form");
//         // console.log(dbo)
//         dbo.collection("survey_form").findOne({
//             name: req.params.data
//         }, 
//         function(err, result) {
//             if (err) throw err;
//             res.json(result);
//             db.close();
//         });
//     });
// });


app.post("/",urlencodedParser, (req, res)=> {

    MongoClient.connect(url, function(err, db) {
        console.log("hello10")
        var dbo = db.db("form");

        dbo.collection("survey_form").updateOne(
            {"Employeeid" : 1},
            {$set: { "EmployeeName" : "NewMartin"}});
    });

    // formData.findOneAndUpdate({},req.body);
    formData(req.body);
    console.log(req.body);
    // res.render("success", {name: req.body.name});
    
})




server.listen(3030);



