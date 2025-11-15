var express = require("express");
var router = express.Router();

var desempenhoController = require("../controllers/desempenhoController");

router.get("/consultarTodosDados/:idUsuario", function (req, res){
    desempenhoController.consultarTodosDados(req, res);
});

router.get("/consultarUltimasPartidas/:idUsuario", function (req, res){
    desempenhoController.consultarUltimasPartidas(req, res);
});

module.exports = router;