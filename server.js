const express = require("express");
const morgan = require("morgan");
const PORT = 9001;

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.send("This is a 404 error, we are sincerely sorry from Jenna, Santiago, Victor").sendStatus(404);
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
