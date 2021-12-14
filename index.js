const connection = require('./config/db');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const port = 4041 || process.env.PORT;
const app = express();
const secretString = Math.floor((Math.random() * 10000) + 1);

// app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: 'true'
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: secretString.toString(),
    resave: false,
    saveUninitialized: false
}));


app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
