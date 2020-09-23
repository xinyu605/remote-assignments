const express = require('express');

//create a server
const app = express();

//set up the server using the listen method (tell server which port to serve)
app.listen(3000);

//create routes
app.get('/', (req, res) => {
    res.send('Hello, My Server!');
});