const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require ("mongoose");

const app = express();

app.set('view engine' , 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/wikiDB")

const articleSchema ={
    title : String ,
    content : String 
}

const Article = mongoose.model("Article", articleSchema);

app.route("/articles")

.get(function(req, res){
  Article.find()
  .then(Articles => {
    res.send(Articles);
  })
  .catch(err => {
    res.send(err);
  });

})

.post(function (req,res){
  console.log(req.body.title);
  console.log(req.body.content);

  const newArticle =  new Article ({
      title : req.body.title  ,
      content : req.body.content
  })
  newArticle.save()
  .then(Articles => {
    res.send("saved article sucessfully");
  })
  .catch(err => {
    res.send(err);
  });
})

.delete(function(req, res){
  Article.deleteMany()
  .then(Articles => {
    res.send("deleted sucessfully");
  })
  .catch(err => {
    res.send(err);
  })
});

app.route("/articles/:articleTitle")
.get(function(req, res){
  Article.findOne({title:req.params.articleTitle})
  .then(Articles => {
    res.send(Articles);
  })
  .catch(err => {
    res.send(err);
  });
})
.put(function(req, res){
  Article.updateOne(
    { title: req.params.articleTitle },  // Find the article by title
    { title: req.body.title, content: req.body.content },  // Update title and content with request body values
    { overwrite: true }  // Overwrite the existing document
  )
  .then(result => {
    if (result.modifiedCount > 0) {
      res.send("Successfully updated the article.");
    } else {
      res.status(404).send("No article matching that title was found.");
    }
  })
  .catch(err => {
    res.status(500).send(err);
  });
})

.patch(function(req, res){
  Article.updateOne(
    { title: req.params.articleTitle },  // Find the article by title
    { $set: req.body }  // Update only the fields provided in the request body
  )
  .then(result => {
    if (result.modifiedCount > 0) {
      res.send("Successfully updated the article.");
    } else {
      res.status(404).send("No article matching that title was found.");
    }
  })
  .catch(err => {
    res.status(500).send(err);
  });
})
.delete(function(req, res){
  Article.deleteOne({
    title: req.params.articleTitle    
  })
  .then(Articles => {
    res.send("sucessfully deleted");
  })
  .catch(err => {
    res.send(err);
  })
});

app.get("/articles",);
app.post ("/articles",);
app.delete("/articles",);



app.listen(3000, function (){
    console.log("server running on port 3000...");
})