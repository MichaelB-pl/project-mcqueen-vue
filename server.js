const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const fallback = require('express-history-api-fallback');

app = express();
app.use(serveStatic(__dirname + "/dist"));

const root = './dist';
app.use(fallback('index.html', { root: root }));
const port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);




