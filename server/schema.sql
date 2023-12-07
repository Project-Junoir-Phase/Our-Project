-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema carpool
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema carpool
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `carpool` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `carpool` ;

-- -----------------------------------------------------
-- Table `carpool`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carpool`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `dateOfBirth` VARCHAR(55) NOT NULL,
  `phoneNum` INT NOT NULL,
  `email` VARCHAR(155) NOT NULL,
  `gender` VARCHAR(45) NOT NULL,
  `bio` VARCHAR(245) NULL DEFAULT NULL,
  `review` INT NOT NULL DEFAULT '0',
  `picProf` LONGTEXT NULL DEFAULT NULL,
  `picCIN` LONGTEXT NULL DEFAULT NULL,
  `password` LONGTEXT NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `carpool`.`rides`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carpool`.`rides` (
  `ride_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `startingPoint` LONGTEXT NOT NULL,
  `endingPoint` LONGTEXT NOT NULL,
  `smoking` TINYINT NOT NULL DEFAULT '0',
  `pet` TINYINT NOT NULL DEFAULT '0',
  `backSeat` TINYINT NOT NULL DEFAULT '0',
  `loggage` TINYINT NOT NULL DEFAULT '0',
  `price` INT NOT NULL,
  `carColor` VARCHAR(45) NOT NULL,
  `carPlate` VARCHAR(145) NOT NULL,
  `carType` VARCHAR(45) NOT NULL,
  `seatsBooked` INT NOT NULL DEFAULT '0',
  `seatsAv` INT NOT NULL DEFAULT '1',
  `user_id` INT NOT NULL,
  `reservationDate` VARCHAR(45) NOT NULL,
  `reservationTime` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ride_id`),
  INDEX `fk_rides_users_idx` (`user_id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `carpool`.`booking`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carpool`.`booking` (
  `booking_id` INT NOT NULL AUTO_INCREMENT,
  `rade_id` INT NULL,
  `user_id` INT NULL,
  PRIMARY KEY (`booking_id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;










