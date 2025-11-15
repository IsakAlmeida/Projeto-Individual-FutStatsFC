var database = require("../database/config");

function consultarTodosDados(idUsuario){
    var instrucao = `
    SELECT * FROM DesempenhoGeral
        WHERE fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function consultarGols(idUsuario){
    var instrucao = `
    SELECT golsFeitos, golsSofridos FROM DesempenhoGeral
        WHERE fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    consultarTodosDados,
    consultarGols
}