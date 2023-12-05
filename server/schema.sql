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
-- -----------------------------------------------------
-- Schema unsplash
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema unsplash
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `unsplash` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `carpool` ;

-- -----------------------------------------------------
-- Table `carpool`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carpool`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `age` INT NOT NULL,
  `phoneNum` INT NOT NULL,
  `email` VARCHAR(155) NOT NULL,
  `gender` VARCHAR(45) NOT NULL,
  `bio` VARCHAR(245) NULL,
  `review` INT NOT NULL DEFAULT 0,
  `picProf` LONGTEXT NULL,
  `picCIN` LONGTEXT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `carpool`.`rides`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carpool`.`rides` (
  `ride_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `startingPoint` LONGTEXT NOT NULL,
  `endingPoint` LONGTEXT NOT NULL,
  `smoking` TINYINT NOT NULL DEFAULT 0,
  `pet` TINYINT NOT NULL DEFAULT 0,
  `backSeat` TINYINT NOT NULL DEFAULT 0,
  `loggage` TINYINT NOT NULL DEFAULT 0,
  `prise` INT NOT NULL,
  `carColor` VARCHAR(45) NOT NULL,
  `carPlate` VARCHAR(145) NOT NULL,
  `carType` VARCHAR(45) NOT NULL,
  `seatsBooked` INT NOT NULL DEFAULT 0,
  `seatsAv` INT NOT NULL DEFAULT 1,
  `id_user` INT NOT NULL,
  PRIMARY KEY (`ride_id`),
  INDEX `fk_ride_user_idx` (`id_user` ASC) VISIBLE,
  CONSTRAINT `fk_ride_user`
    FOREIGN KEY (`id_user`)
    REFERENCES `carpool`.`user` (`user_id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `carpool`.`booking`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carpool`.`booking` (
  `id_user` INT NOT NULL,
  `ride_id` INT NOT NULL,
  `created_Al` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `book_id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`book_id`, `id_user`, `ride_id`),
  INDEX `fk_users_has_rides_rides1_idx` (`ride_id` ASC) VISIBLE,
  INDEX `fk_users_has_rides_users1_idx` (`id_user` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_rides_users1`
    FOREIGN KEY (`id_user`)
    REFERENCES `carpool`.`users` (`user_id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `fk_users_has_rides_rides1`
    FOREIGN KEY (`ride_id`)
    REFERENCES `carpool`.`rides` (`ride_id`)
    ON DELETE CASCADE
    ON UPDATE RESTRICT)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;





-- Inserting data into carpool.users


-- Inserting another user into carpool.users


INSERT INTO `carpool`.`users` 
  (`name`, `lastName`, `age`, `phoneNum`, `email`, `gender`, `bio`, `review`, `picProf`, `picCIN`) 
VALUES 
  ('Jane', 'Smith', 30, 987654321, 'jane.smith@example.com', 'Female', 'A brief bio about Jane Smith.', 0, 'path_to_jane_profile_pic.jpg', 'path_to_jane_CIN_pic.jpg');

INSERT INTO `carpool`.`users` 
  (`name`, `lastName`, `age`, `phoneNum`, `email`, `gender`, `bio`, `review`, `picProf`, `picCIN`) 
VALUES 
  ('Hyba', 'Zoghlami', 20, 58057094, 'hyba@gmail.com', 'Female', 'A brief bio about Jane Smjednez,zlkith.', 0, 'path_to_jane_profile_pic.jpg', 'path_to_jane_CIN_pic.jpg');

INSERT INTO `carpool`.`users` 
  (`name`, `lastName`, `age`, `phoneNum`, `email`, `gender`, `bio`, `review`, `picProf`, `picCIN`) 
VALUES 
  ('John', 'Doe', 25, 123456789, 'john.doe@example.com', 'Male', 'A brief bio about John Doe.', 0, 'path_to_john_profile_pic.jpg', 'path_to_john_CIN_pic.jpg');

INSERT INTO `carpool`.`users` 
  (`name`, `lastName`, `age`, `phoneNum`, `email`, `gender`, `bio`, `review`, `picProf`, `picCIN`) 
VALUES 
  ('Alice', 'Johnson', 30, 987654321, 'alice.johnson@example.com', 'Female', 'A brief bio about Alice Johnson.', 0, 'path_to_alice_profile_pic.jpg', 'path_to_alice_CIN_pic.jpg');


INSERT INTO `carpool`.`users` 
  (`name`, `lastName`, `age`, `phoneNum`, `email`, `gender`, `bio`, `review`, `picProf`, `picCIN`) 
VALUES 
 ('Michael', 'Brown', 35, 1239876543, 'michael.brown@example.com', 'Male', 'A brief bio about Michael Brown.', 0, 'path_to_michael_profile_pic.jpg', 'path_to_michael_CIN_pic.jpg');












