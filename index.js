// Importa a nossa aplicação
const app = require("./src/app");

//Define a porta
const PORT = 3000;

//Coloca o servidor a ouvir os pedidos HTTP
app.listen(PORT, () => {
  console.log(`servidor a correr ${PORT}`);
});
