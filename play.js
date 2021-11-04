
//const { stdin } = require('process');
//const net = require('net');
const { connect } = require('./client');
const { setupInput } = require('./input');

// connect..
console.log("Connecting ...");

//connect();
// setup interface..
//setupInput();
setupInput(connect());

