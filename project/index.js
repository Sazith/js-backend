const express = require('express')
const path = require('path');
const fs = require('fs')

const app = express()
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine', 'ejs');

app.get('/', function(req,res){
  fs.readdir(`./files`,function(err,files){
   res.render("index", {files: files})
  })
    
})

app.post('/create',function(req, res){
  console.log(req.body);
  fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
    res.redirect("/")
  })
  
})

//dynamic routing 
app.get('/profile/:username', function(req,res){
   res.send( req.params.username)
})

app.get('/author/:username/:age', function(req,res){
    console.log('test param',(req.params));
   res.send( `Author: ${req.params.username} , Age : ${req.params.age}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})