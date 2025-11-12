var express = require("express");
var router = express.Router();

var registrarPartidaController = require("../controllers/registrarPartidaController");

router.post("/registrar", function (req, res) {
    registrarPartidaController.registrar(req, res);
});

module.exports = router;