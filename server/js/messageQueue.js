const storeMessages = require('./httpHandler');

const messages = []; // the storage unit for messages

module.exports.enqueue = (message) => {
  console.log(`Enqueing message: ${message}`);
  messages.push(message);
  storeMessages.initialize(messages);
};

module.exports.dequeue = () => {
  // returns undefined if messages array is empty
  console.log(messages);
  return messages.shift();
};


// initialize((message) => {
//   enqueue(message)
// });

// messages = ['up', 'down']
