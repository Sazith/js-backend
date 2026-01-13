const express = require('express')
const app = express()
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine', 'ejs');

// const userModel = require('./usermodel')
const userModel = require('./models/user')

// app.get('/',(req,res)=>{
//     res.send("hey")
// })
app.get('/',(req,res)=>{
    res.render("index")
})

app.get('/read', async (req,res)=>{
    let users = await userModel.find()
    res.render("read",{users})
})

app.post('/create', async (req, res) => {
    let { name, email, image } = req.body;
    let createUser = await userModel.create({
        name,
        email,
        image
    })
    res.redirect('/read')
})

app.get('/delete/:id', async (req,res)=>{
    let users = await userModel.findOneAndDelete({_id: req.params.id})
    res.redirect("/read")
})

// app.get('/edit/:userid', async (req, res) => {
//     const user = await userModel.findOne({_id: req.params.id});
//     res.render('edit', { user });
// });

app.get('/edit/:id', async (req, res) => {
    const user = await userModel.findById(req.params.id);

    if (!user) {
        return res.status(404).send("User not found");
    }

    res.render('edit', { user });
});

app.post('/update/:id', async (req, res) => {
    const { name, email, image } = req.body;

    await userModel.findByIdAndUpdate(req.params.id, {
        name,
        email,
        image
    });

    res.redirect('/read');
});

// app.get('/create', async (req,res) => {
//  let createuser = await userModel.create({
//     name:"hasan",
//     email:"hasan@gmail.com",
//     userName: "Hasan2"
//    })
//    res.send(createuser)
// })

// app.get('/update', async (req,res) => {
//     let updateUser = await userModel.findOneAndUpdate({userName: "harsh"},{name: "Sazith"},{new: true})
//    res.send(updateUser)
// })

// app.get("/read", async (req, res) => {
//   let users = await  userModel.find()
//   let singleUser = await  userModel.find({userName:"Hasan2"}) // will give array 
//   let singleUserFind = await  userModel.findOne({userName:"Hasan2"}) // will give null if no user 
//   res.send(users)
// })

// app.get("/delete", async (req, res) => {
//   let user = await  userModel.findOneAndDelete({userName:"Hasan2"})
//   res.send(user)
// })


app.listen(3000)