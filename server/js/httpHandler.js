const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const keyEvent = require('./keypressHandler');
const getMessage = require('./messageQueue');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////x
// ./background.jpg

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

  // fs.existsSync(path)

  // if (fs.existsSync(backgroundImageFile)) {
  //  res.end(req.url + backgroundImageFile)
  // }

  // /./missing.jpg
  // 'http://127.0.0.1:3000/background.jpg'

  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
  } else if (req.method === 'GET') {

    if (req.url === '/') {
      res.writeHead(200, headers);
      res.end(getMessage.dequeue());
    } else if (req.url === '/background.jpg') {

      fs.readFile(module.exports.backgroundImageFile, (err, data) => {
        if (err) {
          res.writeHead(404, headers);
        } else {
          res.writeHead(200, headers);
          res.write(data, 'binary');
        }
        res.end();
        next();
      })
    }
  }
};
// invoke next() at the end of a request to help with testing!

// if req.method === 'GET'
//  res.end(message)

// fs.readFile('/etc/passwd', (err, data) => {
  // if (err) throw err;
  // console.log(data);

  // fs.existsSync('.' + req.url)) {
  //   console.log('EXISTS');
  //   res.writeHead(200, headers);
  //   res.end(req.url);
  // } else {
  //   console.log('DOES NOT EXIST');