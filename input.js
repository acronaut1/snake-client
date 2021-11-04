let connection;
const { MOVE_UP_KEY} = require('./constants');
// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", handleUserInput);
//   return stdin;
// };

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', key => handleUserInput(key));
  
  return stdin;
};

// handleUserInput = (key) => {
//   if (key === '\u0003') {process.exit();}
  
//                 // key- c
//   if (key == 'c') {connection.write("Say: Hey");}
//   if (key === 'v') {connection.write("Say: LMAO");}

//   if (key === 'w') {
//     console.log("up..");
//     conn.write("Move: up");
//   }
//   if (key === 'a') {connection.write("Move: left");}
//   if (key === 's') {connection.write("Move: down");}
//   if (key === 'd') {connection.write("Move: right");}
// };




const handleUserInput = function(key) { 

  if (key === "\u0003") {process.exit();
  }
  if (key === "c") {connection.write("Say: o_o");}
  if (key === "v") {connection.write("Say: -_-");}
  if (key === "h") {connection.write("Say: Hey")}
  if (key === "0") {connection.write("Say: dont")}
  if (key === "1") {connection.write("Say: forget")}
  if (key === "2") {connection.write("Say: to ")}
  if (key === "3") {connection.write("Say: follow")}
  if (key === "4") {connection.write("Say: me")}
  if (key === "5") {connection.write("Say: for")}
  if (key === "6") {connection.write("Say: busines")}
  if (key === "7") {connection.write("Say: inquiries")}

  if (key === MOVE_UP_KEY) {
    console.log("UP!");
    connection.write("Move: up");
  }
  if (key === "a") {connection.write("Move: left");}
  if (key === "s") {connection.write("Move: down");}
  if (key === "d") {connection.write("Move: right");}

};

//const handleUserInput = function () {}


module.exports = { setupInput };