const cookieParser = require('cookie-parser')
const express = require('express')
const saltRounds = 10;
const app = express()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

app.use(cookieParser())

app.get("/",function(req, res){
    res.cookie("name","harsh")

    bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash("myPlaintextPassword", salt, function(err, hash) {
        // Store hash in your password DB.
        //$2b$10$CUnH6bxLGrxh1L/lr446Q.eHjJMCkmNrffnj51aM0QVPl3r5nBr1.
        console.log(hash);
        
    });
});

bcrypt.compare("myPlaintextPassword ", '$2b$10$CUnH6bxLGrxh1L/lr446Q.eHjJMCkmNrffnj51aM0QVPl3r5nBr1.', function(err, result) {
    // result == true
    console.log(result);
    
});

let token = jwt.sign({email: "harsh@gmail.com"},"secret")
res.cookie("token",token)
console.log('token',token);

    res.send("done")
})

app.get("/read",function(req, res){
    console.log(req.cookies);
    let data = jwt.verify(req.cookies.token, 'secret')
    console.log('data',data);
    
    res.send("Read page")
})


app.listen(3000)