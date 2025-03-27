// IMPORTO EXPRESS
const express = require("express");
// CREO IL ROUTER
const router = express.Router();
//IMPORTO ARRAY CON POSTS
const postsArray = require("../arrayposts.js");
// SPOSTO LE ROTTE CRUD DA APP IN ROUTER (al posto di app. metto router.)
// INDEX -> visualizzo tutti gli elementi (in formato JSON)
router.get("/", (req, res) => {
  res.json(postsArray); // LISTA JSON IN POSTMAN
});
// SHOW -> visualizzo un solo elemento
router.get("/:slug", (req, res) => {
  const currentPostSlug = req.params.slug;
  const currentPost = postsArray.find(
    (element) => element.slug === currentPostSlug
  );
  if (currentPost) {
    res.json(currentPost);
  } else {
    res.json("errore");
  }
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
