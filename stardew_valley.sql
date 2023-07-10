-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 09-Jul-2023 às 18:46
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `stardew_valley`
--
CREATE DATABASE stardew_valley;
USE stardew_valley;
-- --------------------------------------------------------

--
-- Estrutura da tabela `tbcrescimentolavouras`
--

CREATE TABLE `tbcrescimentolavouras` (
  `IdCrescimento` int(11) NOT NULL,
  `Nome` varchar(50) DEFAULT NULL,
  `Estagio_1_imagem` varbinary(512) DEFAULT NULL,
  `Estagio_2_imagem` varbinary(512) DEFAULT NULL,
  `Estagio_3_imagem` varbinary(512) DEFAULT NULL,
  `Estagio_4_imagem` varbinary(512) DEFAULT NULL,
  `Estagio_5_imagem` varbinary(512) DEFAULT NULL,
  `Colheita_1_imagem` varbinary(512) DEFAULT NULL,
  `Colheita_2_imagem` varbinary(512) DEFAULT NULL,
  `Estagio_1_descricao` varchar(10) DEFAULT NULL,
  `Estagio_2_descricao` varchar(10) DEFAULT NULL,
  `Estagio_3_descricao` varchar(10) DEFAULT NULL,
  `Estagio_4_descricao` varchar(10) DEFAULT NULL,
  `Estagio_5_descricao` varchar(10) DEFAULT NULL,
  `Colheita_1_descricao` varchar(20) DEFAULT NULL,
  `Colheita_2_descricao` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tbcrescimentolavouras`
--
ALTER TABLE `tbcrescimentolavouras`
  ADD PRIMARY KEY (`IdCrescimento`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tbcrescimentolavouras`
--
ALTER TABLE `tbcrescimentolavouras`
  MODIFY `IdCrescimento` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
