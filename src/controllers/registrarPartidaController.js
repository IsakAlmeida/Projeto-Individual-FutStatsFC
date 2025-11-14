var registrarPartidaModel = require("../models/registrarPartidaModel");

function registrar(req, res) {
    var chutesGol = req.body.chutesGol;
    var golsMarcados = req.body.golsMarcados;
    var golsSofridos = req.body.golsSofridos;
    var resultado = req.body.resultado;
    var idUsuario = req.body.idUsuario;

    registrarPartidaModel.atualizarDesempenho(idUsuario, chutesGol, golsMarcados, golsSofridos, resultado); //chama a função para atualizar o desempenho

    registrarPartidaModel.registrar(chutesGol, golsMarcados, golsSofridos, resultado, idUsuario).then(function(resposta){
        res.status(200).send("Partida registrada e desempenho atualizado!");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function atualizarDesempenho(req, res) {
    registrarPartidaModel.atualizarDesempenho(idUsuario, chutesGol, golsMarcados, golsSofridos, resultado).then(function(resposta){
        res.status(200).send("Desempenho atualizado!");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
module.exports = {
    registrar,
    atualizarDesempenho
}