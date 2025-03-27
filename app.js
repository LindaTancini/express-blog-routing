// IMPORTO EXPRESS
const express = require("express");
// CREO APP INVOCANDO EXPRESS
const app = express();
// DEFINISCO LA PORTA
const port = 3000;
// CREO LE ROTTE CRUD
// INDEX -> visualizzo tutti gli elementi
app.get("/posts", (req, res) => {
  res.send("Vedo tutti i post");
});
// AVVIO IL SERVER SULLA PORTA 3000 E CONTROLLO SU POSTMAN
app.listen(port, () => {
  console.log(`Sono un server attivo sulla porta:${port}`);
});
