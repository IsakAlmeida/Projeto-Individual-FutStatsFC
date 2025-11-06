CREATE DATABASE futstatsfc;
USE futstatsfc;

-- CRIAÇÃO DAS TABELAS

-- TABELA USUARIO: ARMAZENA INFORMAÇÕES DA CONTA DO USUÁRIO
CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
		CONSTRAINT chkEmail CHECK(email LIKE '%@%.%'),
    senha VARCHAR(100) NOT NULL,
	nickname VARCHAR(100),
    dataCadastro DATE
    );

-- TABELA PARTIDA: ARMAZENA INFORMAÇÕES SOBRE CADA PARTIDA DE UM USUÁRIO
CREATE TABLE Partida (
	idPartida INT PRIMARY KEY AUTO_INCREMENT,
    dataPartida DATETIME NOT NULL,
	modoJogo VARCHAR(50) NOT NULL,
    golsFeitos INT NOT NULL,
    golsSofridos INT NOT NULL,
    resultado VARCHAR(50) NOT NULL,
    percentPosseBola DECIMAL(5,2) NOT NULL,
    chutesGol INT NOT NULL,
    fkUsuario INT NOT NULL,
		CONSTRAINT fkPartidaUsuario
			FOREIGN KEY (fkUsuario)
				REFERENCES Usuario(idUsuario)
    );

-- TABELA DESEMPENHOGERAL: ARMAZENA INFORMAÇÕES MACRO SOBRE TODAS AS PARTIDAS DE UM USUARIO
CREATE TABLE DesempenhoGeral (
	idDesempenhoGeral INT PRIMARY KEY AUTO_INCREMENT,
    totalPartidas INT NOT NULL,
    vitorias INT NOT NULL,
    empates INT NOT NULL,
    derrotas INT NOT NULL,
    golsFeitos INT NOT NULL,
    golsSofridos INT NOT NULL,
    mediaGolsPartida DECIMAL(4,2) NOT NULL,
    aproveitamento DECIMAL(5,2) NOT NULL,
    fkUsuario INT NOT NULL,
		CONSTRAINT fkDesempenhoUsuario
				FOREIGN KEY (fkUsuario)
					REFERENCES Usuario(idUsuario)
    );