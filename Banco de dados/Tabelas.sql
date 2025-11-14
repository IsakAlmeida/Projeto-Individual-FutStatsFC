CREATE DATABASE futstatsfc;
USE futstatsfc;

-- CRIAÇÃO DAS TABELAS

-- TABELA USUARIO: ARMAZENA INFORMAÇÕES DA CONTA DO USUÁRIO
CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
		CONSTRAINT chkEmail CHECK(email LIKE '%@%.%'),
    senha VARCHAR(100) NOT NULL
    );

-- TABELA PARTIDA: ARMAZENA INFORMAÇÕES SOBRE CADA PARTIDA DE UM USUÁRIO
CREATE TABLE Partida (
	idPartida INT PRIMARY KEY AUTO_INCREMENT,
    golsMarcados INT NOT NULL,
    golsSofridos INT NOT NULL,
    resultado VARCHAR(50) NOT NULL,
    chutesGol INT NOT NULL,
    fkUsuario INT NOT NULL,
		CONSTRAINT fkPartidaUsuario
			FOREIGN KEY (fkUsuario)
				REFERENCES Usuario(idUsuario)
    );

-- TABELA DESEMPENHOGERAL: ARMAZENA INFORMAÇÕES MACRO SOBRE TODAS AS PARTIDAS DE UM USUARIO
CREATE TABLE DesempenhoGeral (
	idDesempenhoGeral INT PRIMARY KEY AUTO_INCREMENT,
    totalPartidas INT DEFAULT 0,
    vitorias INT DEFAULT 0,
    empates INT DEFAULT 0,
    derrotas INT DEFAULT 0,
    golsMarcados INT DEFAULT 0,
    golsSofridos INT DEFAULT 0,
    chutesGol INT DEFAULT 0,
    fkUsuario INT NOT NULL,
		CONSTRAINT fkDesempenhoUsuario
				FOREIGN KEY (fkUsuario)
					REFERENCES Usuario(idUsuario)
    );

