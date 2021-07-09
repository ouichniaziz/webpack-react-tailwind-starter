const express = require('express');
const path = require('path'); 
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port, function () {
 console.log('App listening on port: ' + port);
});