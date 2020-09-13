const express = require('express'); //module import
const path = require('path');
const app = express();
const router = require('./routers/qr.router'); //file import
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

//serving static files
app.use(express.static(path.join(__dirname, '/public')));

app.use('/qr', router); 

app.get('/help', (req, res) => {
    res.redirect('/help.html');
});

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});