// utworzenie pliku, dodanie wartości, odczyt i wyświetlenie tabeli
import fs from "fs/promises";
import { join } from "path";

const data = { secret: "message" };

// flag dodaje kolejne data
await fs.writeFile("db.txt", JSON.stringify(data) + "\n", { flag: "a" });
// lub
const newFile = (data) => JSON.stringify(data) + "\n";
await fs.writeFile("db.txt", newFile(data), { flag: "a" });

const data1 = await fs.readFile("db.txt", { encoding: "utf-8" });
console.log(data1);
// lub
const data2 = await fs.readFile("db.txt");
console.log(data2.toString());

// kiedyś trzeba było zapisać funkcję async (jak niżej), teraz wystraczy samo await, jak wyżej

// (async () => {
//   const data1 = await fs.readFile("db.txt", { encoding: "utf-8" });
//   console.log(data1);
// }) ();

// lub;

// const main = async () => {
//   const data1 = await fs.readFile("db.txt", { encoding: "utf-8" });
//   console.log(data1);
// };
// main();

// wyświetla klucz
const objects = data1.split("\n").filter(Boolean);
objects.forEach((obj, i) => {
  console.log(i, JSON.parse(obj).secret);
});

// wyświetla obiekt
const objects2 = data1.split("\n").filter(Boolean);
objects2.forEach((obj, i) => {
  console.log(i, JSON.parse(obj));
});

const print = async (diretoryName) => {
  const files = await fs.readdir(diretoryName);
  console.log(files);
  const stats = await Promise.all(
    files.map(async (file) => {
      const filePath = join(diretoryName, file);
      const { size, mtime } = await fs.stat(filePath);
      return {
        name: file,
        size,
        date: mtime,
      };
    })
  );
  console.table(stats);
};

print(".");
