CREATE DATABASE  IF NOT EXISTS `stardew_valley` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `stardew_valley`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: stardew_valley
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbcrescimentolavouras`
--

DROP TABLE IF EXISTS `tbcrescimentolavouras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbcrescimentolavouras` (
  `IdCultivo` bigint NOT NULL AUTO_INCREMENT,
  `Nome_cultivo` varchar(50) DEFAULT NULL,
  `Nome_muda` varchar(50) DEFAULT NULL,
  `Imagem_muda` text DEFAULT NULL,
  `Imagem_cultivo` text DEFAULT NULL,
  `Imagem_estagios_1` text DEFAULT NULL,
  `Imagem_estagios_2` text DEFAULT NULL,
  `Imagem_estagios_3` text DEFAULT NULL,
  `Imagem_estagios_4` text DEFAULT NULL,
  `Imagem_estagios_5` text DEFAULT NULL,
  `Imagem_colheita_1` text DEFAULT NULL,
  `Imagem_colheita_2` text DEFAULT NULL,
  `desc_cultivo_1` varchar(500) DEFAULT NULL,
  `desc_cultivo_2` varchar(500) DEFAULT NULL,
  `Estacao` varchar(50) DEFAULT NULL,
  `Energia` bigint DEFAULT NULL,
  `Preco_de_venda_cultivo` bigint DEFAULT NULL,
  `Estagio_1_descricao` varchar(10) DEFAULT NULL,
  `Estagio_2_descricao` varchar(10) DEFAULT NULL,
  `Estagio_3_descricao` varchar(10) DEFAULT NULL,
  `Estagio_4_descricao` varchar(10) DEFAULT NULL,
  `Estagio_5_descricao` varchar(10) DEFAULT NULL,
  `Colheita_1_descricao` varchar(20) DEFAULT NULL,
  `Colheita_2_descricao` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`IdCultivo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `tblogin` (
  `idlogin` bigint NOT NULL AUTO_INCREMENT,
  `login` varchar(50) NOT NULL,
  `senha` varchar(100) NOT NULL,
  PRIMARY KEY (`idlogin`)
)
INSERT INTO tblogin(login, senha) VALUES ('admin', 'admin');

-- Dump completed on 2023-07-28 14:36:18
