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
    dataCadastro DATE
    );

-- TABELA PARTIDA: ARMAZENA INFORMAÇÕES SOBRE CADA PARTIDA DE UM USUÁRIO
CREATE TABLE Partida (
	idPartida INT PRIMARY KEY AUTO_INCREMENT,
    dataPartida DATETIME NOT NULL,
    golsFeitos INT NOT NULL,
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
    totalPartidas INT,
    vitorias INT,
    empates INT,
    derrotas INT,
    golsFeitos INT,
    golsSofridos INT,
    mediaGolsPartida DECIMAL(4,2),
    aproveitamento DECIMAL(5,2),
    fkUsuario INT NOT NULL,
		CONSTRAINT fkDesempenhoUsuario
				FOREIGN KEY (fkUsuario)
					REFERENCES Usuario(idUsuario)
    );
    
