const net = require("net");
const { IP, PORT} = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP, //"165.227.47.243", // "IP address here",
    port: PORT //50541 // PORT number here,
  });

   // interpret incoming data as text
   conn.setEncoding("utf8");

   conn.on('data', (data) => {
    //console.log("You ded cuz you idled");
    console.log(`incoming msg from server:`, data);})

  conn.on("connect", () => {
    console.log("Beware it lives!");
    conn.write('Name: OSK');
     setInterval(() => {conn.write("Move: up");}, 200);
     //setInterval(() => {conn.write("Move: left");}, 1000);
     //setInterval(() => {conn.write("Move: down");}, 2000); 
     //setInterval(() => {conn.write("Move: right");}, 3000); 
  });

  conn.on("data", (data) => {
    console.log('Server:', data);
  });

  return conn;
};

module.exports = {connect};