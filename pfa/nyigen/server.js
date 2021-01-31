const express  = require('express')
const app = express();
const server = require('http').Server(app);
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

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
    // console.log(res.json)
    // $.getJSON('mongodb+srv://test:test@cluster0.zxzkx.mongodb.net/form?retryWrites=true&w=majority', function(data) {
// console.log(data)});
    res.render("index");
})



app.post("/",urlencodedParser, (req, res)=> {
    formData(req.body);
    console.log(req.body);
    res.render("success", {name: req.body.name});
})




server.listen(3030);



