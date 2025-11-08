var database = require("../database/config");

function consultar(){
    var instrucao = `
    SELECT * FROM DesempenhoGeral
        WHERE idUsuario = ${sessionStorage.ID_USUARIO};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    consultar
}