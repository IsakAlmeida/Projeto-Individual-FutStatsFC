var registrarPartidaModel = require("../models/registrarPartidaModel");

function registrar(req, res) {
    var chutesGol = req.body.chutesGol;
    var golsMarcados = req.body.golsMarcados;
    var golsSofridos = req.body.golsSofridos;
    var resultado = req.body.resultado;
    var idUsuario = req.body.idUsuario;

    registrarPartidaModel.registrar(chutesGol, golsMarcados, golsSofridos, resultado, idUsuario).then(function(resposta){
        res.status(200).send("Partida registrada!");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    registrar
}