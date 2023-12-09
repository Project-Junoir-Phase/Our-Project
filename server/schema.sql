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
-- Table `carpool`.`booking`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carpool`.`booking` (
  `booking_id` INT NOT NULL AUTO_INCREMENT,
  `rade_id` INT NULL DEFAULT NULL,
  `user_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`booking_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


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
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `carpool`.`rides`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carpool`.`rides` (
  `ride_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `startingPoint` LONGTEXT NOT NULL,
  `endingPoint` LONGTEXT NOT NULL,
  `smoking` TINYINT NULL DEFAULT '0',
  `pet` TINYINT NULL DEFAULT '0',
  `backSeat` TINYINT NULL DEFAULT '0',
  `loggage` TINYINT NULL DEFAULT '0',
  `price` INT NOT NULL,
  `carColor` VARCHAR(45) NULL,
  `carPlate` VARCHAR(145) NULL,
  `carType` VARCHAR(45) NULL,
  `seatsBooked` INT NULL DEFAULT '0',
  `seatsAv` INT NOT NULL DEFAULT '1',
  `reservationDate` VARCHAR(45) NOT NULL,
  `reservationTime` VARCHAR(45) NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`ride_id`),
  INDEX `fk_rides_users_idx` (`user_id` ASC) INVISIBLE,
  CONSTRAINT `fk_rides_users`
    FOREIGN KEY (`user_id`)
    REFERENCES `carpool`.`users` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;








INSERT INTO `carpool`.`users` (
    `name`,
    `lastName`,
    `dateOfBirth`,
    `phoneNum`,
    `email`,
    `gender`,
    `bio`,
    `review`,
    `picProf`,
    `picCIN`,
    `password`
) VALUES (
    'John',
    'Doe',
    '1990-05-15',
    1234567890,
    'john.doe@example.com',
    'Male',
    'A brief bio about John Doe.',
    5,
    'URL_TO_PROFILE_PICTURE',
    'URL_TO_CIN_PICTURE',
    'hashed_password'
);









INSERT INTO `carpool`.`users` (
    `name`,
    `lastName`,
    `dateOfBirth`,
    `phoneNum`,
    `email`,
    `gender`,
    `bio`,
    `review`,
    `picProf`,
    `picCIN`,
    `password`
) VALUES (
    'Jane',
    'Smith',
    '1985-08-21',
    987653210,
    'jane.smith@example.com',
    'Female',
    'A brief bio about Jane Smith.',
    4,
    'URL_TO_PROFILE_PICTURE_JANE',
    'URL_TO_CIN_PICTURE_JANE',
    'hashed_password_jane'
);



INSERT INTO `carpool`.`users` (
    `name`,
    `lastName`,
    `dateOfBirth`,
    `phoneNum`,
    `email`,
    `gender`,
    `bio`,
    `review`,
    `picProf`,
    `picCIN`,
    `password`
) VALUES (
    'Alex',
    'Johnson',
    '1993-11-03',
    555134567,
    'alex.johnson@example.com',
    'Male',
    'A brief bio about Alex Johnson.',
    2,
    'URL_TO_PROFILE_PICTURE_ALEX',
    'URL_TO_CIN_PICTURE_ALEX',
    'hashed_password_alex'
);



INSERT INTO `carpool`.`users` (
    `name`,
    `lastName`,
    `dateOfBirth`,
    `phoneNum`,
    `email`,
    `gender`,
    `bio`,
    `review`,
    `picProf`,
    `picCIN`,
    `password`
) VALUES (
    'Emily',
    'Miller',
    '1988-07-12',
    99987777,
    'emily.miller@example.com',
    'Female',
    'A brief bio about Emily Miller.',
    3,
    'URL_TO_PROFILE_PICTURE_EMILY',
    'URL_TO_CIN_PICTURE_EMILY',
    'hashed_password_emily'
);





INSERT INTO `carpool`.`users` (
    `name`,
    `lastName`,
    `dateOfBirth`,
    `phoneNum`,
    `email`,
    `gender`,
    `bio`,
    `review`,
    `picProf`,
    `picCIN`,
    `password`
) VALUES (
    'Michael',
    'Williams',
    '1995-04-18',
    7775555,
    'michael.williams@example.com',
    'Male',
    'A brief bio about Michael Williams.',
    5,
    'URL_TO_PROFILE_PICTURE_MICHAEL',
    'URL_TO_CIN_PICTURE_MICHAEL',
    'hashed_password_michael'
);









INSERT INTO `carpool`.`rides` (
    `startingPoint`,
    `endingPoint`,
    `smoking`,
    `pet`,
    `backSeat`,
    `loggage`,
    `price`,
    `carColor`,
    `carPlate`,
    `carType`,
    `seatsBooked`,
    `seatsAv`,
    `user_id`,
    `reservationDate`,
    `reservationTime`
) VALUES (
    'Starting Location',
    'Ending Location',
    0, -- Smoking (0 or 1)
    1, -- Pet (0 or 1)
    1, -- Back Seat (0 or 1)
    0, -- Luggage (0 or 1)
    20, -- Price
    'Red', -- Car Color
    'ABC123', -- Car Plate
    'Sedan', -- Car Type
    2, -- Seats Booked
    3, -- Available Seats
    1, -- User ID (replace with the actual user ID)
    '2023-12-07', -- Reservation Date
    '12:00 PM' -- Reservation Time
);

-- Row 2
INSERT INTO `carpool`.`rides` (
    `startingPoint`,
    `endingPoint`,
    `smoking`,
    `pet`,
    `backSeat`,
    `loggage`,
    `price`,
    `carColor`,
    `carPlate`,
    `carType`,
    `seatsBooked`,
    `seatsAv`,
    `user_id`,
    `reservationDate`,
    `reservationTime`
) VALUES (
    'Start Location 2',
    'End Location 2',
    1,
    0,
    1,
    0,
    25,
    'Blue',
    'XYZ456',
    'SUV',
    3,
    2,
    2,
    '2023-12-08',
    '02:30 PM'
);

-- Row 3
INSERT INTO `carpool`.`rides` (
    `startingPoint`,
    `endingPoint`,
    `smoking`,
    `pet`,
    `backSeat`,
    `loggage`,
    `price`,
    `carColor`,
    `carPlate`,
    `carType`,
    `seatsBooked`,
    `seatsAv`,
    `user_id`,
    `reservationDate`,
    `reservationTime`
) VALUES (
    'Start Location 3',
    'End Location 3',
    0,
    1,
    0,
    1,
    30,
    'Green',
    'JKL789',
    'Convertible',
    1,
    4,
    3,
    '2023-12-09',
    '08:45 AM'
);



