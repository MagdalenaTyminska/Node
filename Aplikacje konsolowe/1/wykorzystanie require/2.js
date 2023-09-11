console.log("Hello there!");

// export default
const message = "Hi";
module.exports = message;

// export obiektu
const string = "Hi";

const user = {
  name: "Adam",
  age: 15,
};

const greet = (name) => console.log(`Hello ${name}`);

module.exports = { string, string2: "Hey", user, greet };
