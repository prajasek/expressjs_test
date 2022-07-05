const express = require('express');
const app = express();
const port = 3000; 
const path = require('path');
const cookieParser = require('cookie-parser');



console.log(__dirname);

app.use(cookieParser());
app.use(express.static('./test'))
app.get('/:id/:name', (req, res, next) => {
    console.log('--->route 1');
    console.log('--->', req.params);
    req.id = req.params.id;
    console.log("Cookie value", req.cookies)
    next();
}, (req, res, next) => {
    console.log("-->route 2");
    console.log("-->", req.id);
    next();
});

app.get('/:id', (req, res) => {
    console.log("->route 3.1");
    let cookieId =  req.cookies;
    console.log(cookieId)
    if (!cookieId.idNumber) {
        console.log("New cookie");
        res.cookie('idNumber', JSON.stringify(req.params));
        res.send('new cookie set');
    }
    res.send("cookie already sent"+ JSON.stringify(req.cookies));
})

app.get('/:id/(:name)?', (req, res) => {
    console.log("->route 3.2")
    res.send(req.params);
})


app.get("/", (req, res) => {
    console.log("->route 3.2");
    res.sendFile(path.join(__dirname , "test/index1.html"))
})


app.use((err1, req, res, next) => {
    console.log("Error Caught", err1);
    res.send({err1})
})


app.listen(port,()=>{})
        



