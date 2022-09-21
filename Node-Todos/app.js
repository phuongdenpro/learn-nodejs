const express = require('express');
const bodeParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

const config = require('./config');
const setupController = require('./api/controller/setupController');


const app = express();
const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname+'/public'));
app.use(bodeParser.json());
app.use(bodeParser.urlencoded({extended: true}));

app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// database
// console.log(config.getDbConnecttionString());
mongoose.connect(config.getDbConnecttionString());

setupController(app);

app.get('/', function(request, response){
    response.render('index');
});

app.listen(port, function(){
    console.log('App listening on port: ' + port);
})