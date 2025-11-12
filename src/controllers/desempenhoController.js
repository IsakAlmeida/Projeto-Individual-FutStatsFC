var desempenhoModel = require("../models/desempenhoModel");

function consultar(req, res) {
    desempenhoModel.consultar().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function consultarGols(req, res) {
    desempenhoModel.consultarGols().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    consultar,
    consultarGols
}