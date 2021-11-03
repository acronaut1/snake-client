
//const { stdin } = require('process');
const { setupInput } = require('./input');
const {connect} = require('./client');

// setup interface..

console.log("Connecting ...");
connect();
setupInput();

