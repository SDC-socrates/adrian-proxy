require('newrelic');
const express = require('express');
const path = require('path');
const React = require('react');
const ReactDom = require('react-dom/server');
const app = express();
const morgan = require('morgan');
const port = process.env.PORT || 3005;
const Carousel = require('../Kyle--Carousel/client/public/bundle-ssr');
const layoutP1 = require('./templates/p1');
const layoutP2 = require('./templates/p2');

app.use(morgan("tiny"));

// console.log(path.resolve('./public/'));
// app.use('/58/', express.static('./public/'));

app.use(/\/\d+\//, (req, res) => {
  var element = React.createElement(Carousel.default);
  res.end(layoutP1 + ReactDom.renderToString(element) + layoutP2);
});

app.use(/\//, (req, res) => {
  var element = React.createElement(Carousel.default);
  res.end(layoutP1 + ReactDom.renderToString(element) + layoutP2);
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
