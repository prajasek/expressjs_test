const express = require('express');
require('./bcrypt-test');

const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
    //res.send({'test': "Testing..."});
    console.log("1st route called")
    next('route');
});


app.get('/1', (req, res, next) => {
    console.log("2nd route calling"); 
    x = new Error('123');
    next(x);
    
}, (req, res) => {
    console.log("2nd router called");
    res.send('2nd route response..')
});

app.get('/*', (req, res, next) => {
    console.log("wildcard route calling")
    next();
}, (req, res) => {
    console.log("wildcard router called");
    res.send('wildcard route response..')
});


// why cant I send error object in response???
app.use('/1', (err, req, res, next) => {
    console.log("-->", err, "<--\n"); res.send(typeof err)
});


app.listen(port, () => console.log("Listening on port 3000..."));
