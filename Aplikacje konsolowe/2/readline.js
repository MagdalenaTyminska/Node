import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Please write something...");

rl.question("What day of the month is it ?\n", (answer) => {
  const answerAsNumber = parseInt(answer);
  if (answerAsNumber === 10) return console.log("It's raining money!");
  console.log("Be frugal!");
});

//callback na każdą linijkę
rl.on("line", (input) => {
  if (input === "exit") process.exit();
  console.log("Your input: ", input);
});
