// import całego pliku 2
const msg = require("./2");
console.log(msg);

// import i wyświetlanie eksportowanego obiektu
const Module = require("./2");
const { string, string2 } = Module;
console.log(string, string2);

console.log(msg.user);
// lub
console.log(Module.user);

Module.greet("Anna");
// lub
msg.greet("Anna");
