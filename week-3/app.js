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
//app.post('/getData', (req, res) => {
//    const number = req.body.number;
//    const integer = /^\+?[1-9][0-9]*$/;
//    if (!number) {
//        res.send('Lack of parameter');        
//    } else if (integer.test(number)) {
//        const ans = addNum(number);
//        res.send(`Result is ${ans}`);
//    } else {
//        res.send('Wrong parameter!');
//    }
//});

app.get('/getData2', (req, res) => {
    const number = req.query.number;
    const integer = /^\+?[1-9][0-9]*$/;
    if (!number) {
        res.locals.result = `<p>Lack of parameter</p>`;
//        res.send('<p>Lack of parameter</p>');       
    } else if (integer.test(number)) {
        const ans = addNum(number);
        res.locals.result = `<p>Result is ${ans}</p>`;
//        res.send(`<p>Result is ${ans}</p>`);
    } else {
        res.locals.result = `<p>Wrong parameter!</p>`;
//        res.send('<p>Wrong parameter!</p>');
    }
});

//Assignment-4
app.get('/myName', (req, res) =>{
    const name = req.cookies.name;
    res.render('myName', {name});
});

//myName.pug form using GET method
app.get('/trackName', (req, res) => {
      res.cookie('name', req.query.name);    //save the cookie
      res.redirect('/myName');
});

////myName.pug form using POST method
//app.post('/trackName', (req, res) => {
//    res.cookie('name', req.body.name);  //save the cookie
//    res.redirect('/myName');
//});

//Assignment-2: add positive numbers
function addNum(integer) {
    let sumNum = 0;
    for (let i = 0; i <= integer; i++) {
        sumNum += i;
    }
    return sumNum;
}
