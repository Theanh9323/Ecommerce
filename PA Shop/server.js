import express from "express";
import bcrypt from "bcrypt";

const app = express();

app.use(express.static("public"));
app.use(express.json())

app.get('/',(req,res) => {
    res.sendFile("index.html",{root:"public"})
})

app.get("/signup",(req,res) => {
    res.sendFile("signup.html",{root:"public"})
})
app.get('/login', (req,res) => {
    res.sendFile("login.html",{root:"public"})
})
app.post("/signup",(req,res) => {
    const {name,email,password, number, tac} = req.body;
    if(name.length < 3) {
        res.json({ 'alert':'name must be 3 letters long'});
    } else if(!email.length) {
        res.json({ 'alert':'Enter your email'});
    } else if(password.length < 8) {
        res.json({ 'alert':'password must be 8 letters long'});
    } else if(Number(number) || number.length < 10) {
        res.json({ 'alert':'invalid number, plese enter valid one'});
    } else if(!tac.checked) {
        res.json({ 'alert':'you must agree to our terms and conditions'})
    } else {

    }
})


app.listen(5500, () => {
    console.log('listening on port 5500');
})
