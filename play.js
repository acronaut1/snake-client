const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // "IP address here",
    port: 50541 // PORT number here,
  });

  conn.on("connect", () => {
    // code that does something when the connection is first established..
    console.log("..connected to the game server");
  });

  conn.on('connect', () => {
    conn.write('Name: OSK');
  })

  conn.on('connect', () => {
    conn.write('Say: (UwU)');
 
  })


  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

console.log("Connecting ...");
connect();


