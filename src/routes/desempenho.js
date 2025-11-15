var express = require("express");
var router = express.Router();

var desempenhoController = require("../controllers/desempenhoController");

router.get("/consultarTodosDados/:idUsuario", function (req, res){
    desempenhoController.consultarTodosDados(req, res);
});

router.get("/consultarGols/:idUsuario", function (req, res){
    desempenhoController.consultar(req, res);
});

module.exports = router;