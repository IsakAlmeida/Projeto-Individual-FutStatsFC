var database = require("../database/config")

function registrar(chutesGol, golsMarcados, golsSofridos, resultado, idUsuario) {
    var instrucao = `
        INSERT INTO Partida (chutesGol, golsMarcados, golsSofridos, resultado, fkUsuario) 
        VALUES (${chutesGol}, ${golsMarcados}, ${golsSofridos}, "${resultado}", ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarDesempenho(idUsuario, chutesGol, golsMarcados, golsSofridos, resultado) {

    let adicionarVitoria = 0;
    let adicionarEmpate = 0;
    let adicionarDerrota = 0;

    if (resultado == "Vitória") {
        adicionarVitoria = 1;
    } else if (resultado == "Empate"){
        adicionarEmpate = 1;
    } else {
        adicionarDerrota = 1;
    }

    // checa se já existe um desempenho para esse usuario
    var instrucao = `
        SELECT * FROM DesempenhoGeral WHERE fkUsuario = ${idUsuario};
    `;

    return database.executar(instrucao).then(function(resposta) {

        if (resposta.length == 0) { // se a resposta do select for 0 quer dizer que não existe dados desse usuario, entao insere como primeiro registro
            var instrucao = `
                INSERT INTO DesempenhoGeral (fkUsuario, totalPartidas, vitorias, empates, derrotas, golsMarcados, golsSofridos, chutesGol)
                VALUES (${idUsuario}, 1, ${adicionarVitoria}, ${adicionarEmpate}, ${adicionarDerrota}, ${golsMarcados}, ${golsSofridos}, ${chutesGol});
            `;
            return database.executar(instrucao);

        } else {
            var instrucao = `
                UPDATE DesempenhoGeral SET totalPartidas = totalPartidas + 1, vitorias = vitorias + ${adicionarVitoria}, empates = empates + ${adicionarEmpate}, 
                derrotas = derrotas + ${adicionarDerrota}, golsMarcados = golsMarcados + ${golsMarcados}, golsSofridos = golsSofridos + ${golsSofridos},
                chutesGol = chutesGol + ${chutesGol}
                WHERE fkUsuario = ${idUsuario};
            `;
            return database.executar(instrucao);

        }
    });
}

module.exports = {
    registrar,
    atualizarDesempenho
};