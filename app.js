const express=require("express");
const ejs=require("ejs");
const bodyParser=require("body-parser");
const app=new express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get("/",function(req,res){
    res.render("index.ejs");
})
app.listen("3000" || process.env.PORT,function(){
    console.log("server started");
})