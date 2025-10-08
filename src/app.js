const express = require("express");
const path = require("path");

const homeRoutes = require("./routes/homeRoutes");
const lembreteRoutes = require("./routes/lembreteRoutes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Rotas
app.use("/", homeRoutes);
app.use("/lembretes", lembreteRoutes);

app.use((req, res) => {
  res.status(404).render("404", { tituloPagina: "Página não encontrado" });
});

module.exports = app;
