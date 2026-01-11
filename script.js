const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(function(req, res, next){
    console.log('middleware');
    next();
    
})
app.use(function(req, res, next){
    console.log('another middleware');
    next();
    
})

app.get('/', (req, res) => {
  res.send('Hello World! node mon install')
})

app.get('/about', (req, res) => {
  res.send('About page')
})

app.get('/profile', (req, res, next) => {
 return next(new Error("Something is wrong"));
})


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})