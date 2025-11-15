var database = require("../database/config");

function consultarTodosDados(idUsuario) {
    var instrucao = `
    SELECT d.* FROM DesempenhoGeral d JOIN
	Usuario u ON u.idUsuario = d.fkUsuario
	WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function consultarUltimasPartidas(idUsuario) {
    var instrucao = `
    SELECT p.idPartida, p.golsMarcados, p.golsSofridos FROM Partida p
	JOIN Usuario u ON u.idUsuario = p.fkUsuario 
        WHERE u.idUsuario = ${idUsuario}
        ORDER BY p.idPartida DESC
        LIMIT 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    consultarTodosDados,
    consultarUltimasPartidas
}