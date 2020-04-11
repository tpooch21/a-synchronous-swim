const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const keyEvent = require('./keypressHandler');
const getMessage = require('./messageQueue');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////x

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  // let randomIndex = Math.floor(Math.random() * directions.length);
  // console.log(req, res);
  // console.log('hello');
  // Initialize keypress handler, with enqueue as callback
  // keyEvent.initialize((message) => {getMessage.enqueue(message)});

  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
  } else if (req.method === 'GET') {
    res.writeHead(200, headers);
    res.end(getMessage.dequeue());
  }
  next();
   // invoke next() at the end of a request to help with testing!

  // if req.method === 'GET'
  //  res.end(message)
};
