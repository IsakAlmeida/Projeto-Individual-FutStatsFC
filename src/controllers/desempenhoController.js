var desempenhoModel = require("../models/desempenhoModel");

function consultarTodosDados(req, res) {
    var idUsuario = req.params.idUsuario;

    desempenhoModel.consultarTodosDados(idUsuario).then(function (resultado) {
            res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        console.log(
            "Houve um erro ao buscar os dados: ",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    })
}

function consultarUltimasPartidas(req, res) {
    var idUsuario = req.params.idUsuario;
    desempenhoModel.consultarUltimasPartidas(idUsuario).then(function (resultado) {
            res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        console.log(
            "Houve um erro ao buscar os dados: ",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    consultarTodosDados,
    consultarUltimasPartidas
}