const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//create a server
const app = express();

//set pug as template engine
app.set('view engine', 'pug');

//Assignment-3: static middleware, body-parser, cookie-parser
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

//set up the server using the listen method (tell server which port to serve)
app.listen(3000);

//create routes
app.get('/', (req, res) => {
    res.send('Hello, My Server!');
});

app.get('/getData', (req, res) => {
    const number = req.query.number;
    const integer = /^\+?[1-9][0-9]*$/;
    if (!number) {
        res.send('Lack of parameter');
    
    // Assignment-2
        
    } else if (integer.test(number)) {
        const ans = addNum(number);
        res.send(`Result is ${ans}`);
    } else {
        res.send('Wrong parameter!');
    }
});

//Assignment-3: user interaction
app.post('/getData', (req, res) => {
    const number = req.body.number;
    const integer = /^\+?[1-9][0-9]*$/;
    if (!number) {
        res.send('Lack of parameter');        
    } else if (integer.test(number)) {
        const ans = addNum(number);
        res.send(`Result is ${ans}`);
    } else {
        res.send('Wrong parameter!');
    }
});

//Assignment-4
app.get('/myName', (req, res) =>{
    const name = req.cookies.name;
    if(name){
        res.render('myName', {name});   //{name: name}
    }else{
        res.redirect('/trackName');
    }
});

app.get('/trackName', (req, res) => {
    res.render('myName');
});

app.post('/trackName', (req, res) => {
    res.cookie('name', req.body.name);  //save the cookie
    res.redirect('/myName');
});

//Assignment-2: add positive numbers
function addNum(integer) {
    let sumNum = 0;
    for (let i = 0; i <= integer; i++) {
        sumNum += i;
    }
    return sumNum;
}
