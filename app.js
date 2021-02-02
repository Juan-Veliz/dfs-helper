// const http = require('http');
const express = require('express');
const router = require('./controllers/index')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(`/api`,router);


app.listen(3000, (port)=>{
  console.log(port);
});