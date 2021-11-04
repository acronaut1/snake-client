const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243", // "IP address here",
    port: 50541 // PORT number here,
  });

  // conn.on("connect", () => {
  //   // when the connection is first established
  //   console.log("Successfully connected to game server!");
  // });

   // interpret incoming data as text
   conn.setEncoding("utf8");

   conn.on('data', (data) => {
    //console.log("You ded cuz you idled");
    console.log(`incoming msg from server:`, data);})

  conn.on("connect", () => {
    console.log("Beware it lives!");
    conn.write('Name: OSK');
     setInterval(() => {conn.write("Move: up");}, 200);
     setInterval(() => {conn.write("Move: left");}, 1000);
     setInterval(() => {conn.write("Move: down");}, 2000); 
     setInterval(() => {conn.write("Move: right");}, 3000); 
  });

  conn.on("data", (data) => {
    console.log('Server:', data);
  });

  // conn.on('connect', () => {
  //   conn.write('Say: \\(o_o)/');
  //   //conn.write('Say: LMAO');
  // })

  return conn;
};

module.exports = {connect};