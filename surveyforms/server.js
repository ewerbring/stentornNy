const express  = require('express')
const app = express();
const server = require('http').Server(app);
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const script = require('./public/main');
let serverCo = script.hello();

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

const formData = (bodyData) =>{
    Form({data:bodyData}).save((err) =>{
        if(err){
            throw err;
        }
    })
}

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set("view engine", "ejs")
app.use(express.static("public"));

app.get("/", (req, res)=> {
    res.render("index");
})


app.post("/",urlencodedParser, (req, res)=> {
formData(req.body);
    res.render("success", {name: req.body.name});
})




server.listen(3030);



