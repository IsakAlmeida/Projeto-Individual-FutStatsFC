var database = require("../database/config")

function registrar(chutesGol, golsMarcados, golsSofridos, resultado,idUsuario) {
    var instrucao = `
        INSERT INTO Partida (chutesGol, golsMarcados, golsSofridos, resultado, fkUsuario) 
        VALUES (${chutesGol}, ${golsMarcados}, ${golsSofridos}, "${resultado}", ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    registrar
};