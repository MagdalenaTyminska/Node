import express from "express";
import colors from "colors";

const app = express();

app.get("/", (request, response) => {
  response.send("Hello there");
});

app.get("/hi", (request, response) => {
  response.send("<h1 style='color:dodgerblue'>Hi!</h1>");
  console.log(new Date());
});

// najczęściej wykorzystywany port lub 8080
const PORT = 3000;
app.listen(PORT, () => {
  console.log(colors.cyan(`[server] Server running on port ${PORT}`));
});
