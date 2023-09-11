import colors from "colors";

// // wyświetlanie procesów
// console.log(process.argv);
// // lub
// const node = (...args) => {
//   console.log(args);
// };
// node("123", "abc");

// kolor i wiadomość
const getArg = (argName) =>
  process.argv
    .slice(2)
    .find((arg) => arg.startsWith(argName))
    ?.replace(argName, "");

const color = getArg("color=") || "white";
const msg = getArg("msg=") || "Please provide a msg argument";

// lub
// const args = process.argv.slice(2);

// const color = args
//   .find((arg) => arg.startsWith("color="))
//   ?.replace("color=", ""); // ? do obsługi undefined
// console.log({ color });

// const msg = args.find((arg) => arg.startsWith("msg="))?.replace("msg=", ""); // ? do obsługi undefined
// console.log({ msg });

const prettyPrint = (color, msg = "Please provide a msg argument") => {
  const coloringFunction = colors[color];
  if (!coloringFunction) console.log(msg);
  else console.log(coloringFunction(msg));
};

prettyPrint(color, msg);
