import express from "express";
import colors from "colors";

const app = express();

//możemy podać ścieżkę zamiast funkcji, możemy zostawić app.use albo wyciągnąc do osobnych funkcji jak poniżej
// app.use((req, res, next) => {
//   const { originalUrl } = req;
//   visits[originalUrl] = visits[originalUrl] ? ++visits[originalUrl] : 1;
//   console.log(colors.magenta(`Visits: ${visits[originalUrl]}`));
//   next();
// });

const logger = (req, res, next) => {
  const { method, originalUrl } = req;
  const date = new Date().toLocaleString();
  console.log(colors.yellow(`[${method}] ${date} - ${originalUrl}`));
  next();
};

const visitsCounter = () => {
  const visits = {};
  return (req, res, next) => {
    const { originalUrl } = req;
    visits[originalUrl] = visits[originalUrl] ? ++visits[originalUrl] : 1;
    console.log(colors.magenta(`Visits: ${visits[originalUrl]}`));
    next();
  };
};

app.use(logger, visitsCounter());

app.get("/", (req, res) => {
  return res.send("Hello there");
});

app.get("/hi", (req, res) => {
  return res.send("<h1 style='color:dodgerblue'>Hi!</h1>");
  console.log(new Date());
});

app.use((req, res) => {
  const notFoundMessage = "Ooopsie! You got lost? There is no such path!";
  return res
    .status(404)
    .send(`<h1 style='color:crimson'>${notFoundMessage}</h1>`);
});

// najczęściej wykorzystywany port lub 8080
const PORT = 3000;
app.listen(PORT, () => {
  console.log(colors.cyan(`[server] Server running on port ${PORT}`));
});
