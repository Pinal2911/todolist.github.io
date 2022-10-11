const express=require('express');
const bodyParser=require('body-parser');
//user defined module
const date=require(__dirname+"/date.js");
const app=express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
  let items=["buy food","eat food","get food"];
  let workItems=[];
app.get("/",function(req,res){
  let day=date.getDate();

   res.render("list",{
     listTitle:day,
     newlistitems:items
   });
});
app.listen(3000,function(req,res){
  console.log("Server started successfully")
});
app.post("/",function(req,res){
  //comparing to the route
  if(req.body.list === "Work"){
     workItems.push(req.body.t1);
     res.redirect("/work");
  }else{
     items.push(req.body.t1);
       res.redirect("/");
  }


});
app.get("/work",function(req,res){
  res.render("list",{
    listTitle:"Work List",
    newlistitems:workItems
})
})
app.post("/work",function(req,res){
  let item=req.body.newlistitems;
  workItems.push(item);
  res.redirect("/work")
})
app.get("/about",function(req,res){
  res.render("about");
})
