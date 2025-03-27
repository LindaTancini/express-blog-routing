// IMPORTO EXPRESS
const express = require("express");
// CREO IL ROUTER
const router = express.Router();
// SPOSTO LE ROTTE CRUD DA APP IN ROUTER (al posto di app. metto router.)
// INDEX -> visualizzo tutti gli elementi
router.get("/", (req, res) => {
  res.send("Vedo tutti i post");
});
// SHOW -> visualizzo un solo elemento
router.get("/:id", (req, res) => {
  res.send("Vedo un solo post");
});
// STORE -> creo un nuovo elemento
router.post("/", (req, res) => {
  res.send("Ho creato un nuovo post");
});
// UPDATE -> aggiorno un elemento
router.put("/:id", (req, res) => {
  res.send("Ho aggiornato un post");
});
// MODIFY -> modifico parzialmente un elemento
router.patch("/:id", (req, res) => {
  res.send("Ho modificato parzialmente un post");
});
// DESTROY -> cancello un elemento
router.delete("/:id", (req, res) => {
  res.send("Ho cancellato un post");
});
//ESPORTO ROUTER IN APP
module.exports = router;
