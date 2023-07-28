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
-- Table structure for table `cultivos`
--

DROP TABLE IF EXISTS `cultivos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cultivos` (
  `IdCultivo` bigint NOT NULL AUTO_INCREMENT,
  `Nome_Cultivo` varchar(50) NOT NULL,
  `Imagem` text NOT NULL,
  `Origem` varchar(50) NOT NULL,
  `IdMuda` bigint DEFAULT NULL,
  `Tempo_de_Crescimento` varchar(200) NOT NULL,
  `Estação` varchar(50) NOT NULL,
  `Energia` bigint DEFAULT NULL,
  `Preco_de_Venda_Cultivo` bigint NOT NULL,
  `desc_cultivo_1` varchar(500),
  `desc_cultivo_2` varchar(500),
  PRIMARY KEY (`IdCultivo`),
  KEY `fk_cultivos_mudas` (`IdMuda`),
  CONSTRAINT `fk_cultivos_mudas` FOREIGN KEY (`IdMuda`) REFERENCES `mudas` (`IdMuda`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `mudas`
--

DROP TABLE IF EXISTS `mudas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mudas` (
  `IdMuda` bigint NOT NULL AUTO_INCREMENT,
  `Nome_Muda` varchar(50) NOT NULL,
  `Imagem` text NOT NULL,
  `IdCultivo` bigint DEFAULT NULL,
  `Tempo_de_Crescimento` varchar(200) NOT NULL,
  `Estacao` varchar(50) NOT NULL,
  `Preco_de_venda_Muda` bigint NOT NULL,
  `Armazém_do_Pierre` bigint DEFAULT NULL,
  `Mercado_Joja` bigint DEFAULT NULL,
  `Carrinho_de_Viagem` varchar(50) DEFAULT NULL,
  `desc_muda_1` varchar(500),
  `desc_muda_2` varchar(500),
  PRIMARY KEY (`IdMuda`),
  KEY `fk_mudas_cultivos` (`IdCultivo`),
  CONSTRAINT `fk_mudas_cultivos` FOREIGN KEY (`IdCultivo`) REFERENCES `cultivos` (`IdCultivo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tbcrescimentolavouras`
--

DROP TABLE IF EXISTS `tbcrescimentolavouras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbcrescimentolavouras` (
  `IdCrescimento` bigint NOT NULL AUTO_INCREMENT,
  `Nome` varchar(50) NOT NULL,
  `Imagem` text NOT NULL,
  `Estagio_1_descricao` varchar(10) DEFAULT NULL,
  `Estagio_2_descricao` varchar(10) DEFAULT NULL,
  `Estagio_3_descricao` varchar(10) DEFAULT NULL,
  `Estagio_4_descricao` varchar(10) DEFAULT NULL,
  `Estagio_5_descricao` varchar(10) DEFAULT NULL,
  `Colheita_1_descricao` varchar(20) DEFAULT NULL,
  `Colheita_2_descricao` varchar(50) DEFAULT NULL,
  `IdCultivo` bigint DEFAULT NULL,
  `IdMuda` bigint DEFAULT NULL,
  PRIMARY KEY (`IdCrescimento`),
  KEY `fk_crescimento_cultivo` (`IdCultivo`),
  KEY `fk_crescimento_mudas` (`IdMuda`),
  CONSTRAINT `fk_crescimento_cultivo` FOREIGN KEY (`IdCultivo`) REFERENCES `cultivos` (`IdCultivo`),
  CONSTRAINT `fk_crescimento_mudas` FOREIGN KEY (`IdMuda`) REFERENCES `mudas` (`IdMuda`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-28 14:36:18
