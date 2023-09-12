import express from "express";
import colors from "colors";

const app = express();

let visits = 0;

//możemy podać ścieżkę zamiast funkcji
app.use((req, res, next) => {
  const { method, originalUrl } = req;
  const date = new Date().toLocaleString();
  console.log(colors.yellow(`[${method}] ${date} - ${originalUrl}`));
  next();
});

app.get("/", (req, res) => {
  res.send("Hello there");
});

app.get("/hi", (req, res) => {
  res.send("<h1 style='color:dodgerblue'>Hi!</h1>");
  console.log(new Date());
});

// najczęściej wykorzystywany port lub 8080
const PORT = 3000;
app.listen(PORT, () => {
  console.log(colors.cyan(`[server] Server running on port ${PORT}`));
});
