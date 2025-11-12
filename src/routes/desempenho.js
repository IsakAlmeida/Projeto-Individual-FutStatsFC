var express = require("express");
var router = express.Router();

var desempenhoController = require("../controllers/desempenhoController");

router.get("/consultar", function (req, res){
    desempenhoController.consultar(req, res);
});

router.get("/consultarGols", function (req, res){
    desempenhoController.consultar(req, res);
});

module.exports = router;