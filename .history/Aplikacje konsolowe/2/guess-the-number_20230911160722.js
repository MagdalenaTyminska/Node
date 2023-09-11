import * as commander from "commander";
import readline from "readline";
import fs from "fs";

const getResultsFileName = () => {
  commander.program.option(
    "-f, --file [type]",
    "File where we will save our game results",
    "results.txt"
  );
  commander.program.parse(process.argv);
  return commander.program.opts().file;
};
console.log(commander.program.opts().file;)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Please provide a number!");

const SECRET_NUMBER = Math.floor(Math.random() * 10) + 1;
// console.log({ SECRET_NUMBER });
let tries = 0;

rl.on("line", (answer) => {
  const toNumber = Number(answer);
  // console.log(`${answer} is ${answer ? toNumber : "NaN"}`);

  tries++;

  if (!isNaN(toNumber)) {
    if (toNumber === SECRET_NUMBER) {
      console.log(`You've won! Secret number is ${SECRET_NUMBER}`);
      const msg = `You guessed after ${tries} tries`;
      console.log(msg);
      fs.appendFileSync(
        getResultsFileName(),
        `${new Date().toISOString()} ${msg}\n`
      );
      rl.close();
    } else {
      console.log(`Try again!`);
      if (toNumber < SECRET_NUMBER) console.log("more");
      if (toNumber > SECRET_NUMBER) console.log("less");
    }
  } else {
    console.log("Invalid input. Please provide a number.");
  }
});
