const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // "IP address here",
    port: 50541 // PORT number here,
  });

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server!");
  });

  conn.on('data', (data) => {
    console.log("You ded cuz you idled");
  })

  conn.on('connect', () => {
    conn.write('Name: OSK');
    
    setTimeout(() => {
      conn.write('Move: up')
    }, 100);
    setInterval(() => {
      conn.write('Move: up')
    }, 300);
    setTimeout(() => {
      conn.write('Move: right')
    }, 40);
    setInterval(() => {
      conn.write('Move: left')
    }, 50);
    setInterval(() => {
      conn.write('Move: down')
    }, 175);
    
    

  })


  // conn.on('connect', () => {
  //   conn.write('Name: OSK');
  // })

  conn.on('connect', () => {
    conn.write('Say: \\(o_o)/');
    //conn.write('Say: LMAO');
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

module.exports = {connect};