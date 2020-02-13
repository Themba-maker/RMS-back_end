-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 13, 2020 at 09:14 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rms_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `landlord`
--

CREATE TABLE `landlord` (
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `id_no` int(13) NOT NULL,
  `email` varchar(255) NOT NULL,
  `cell` int(10) NOT NULL,
  `campus_loc` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `pwd` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `landlord`
--

INSERT INTO `landlord` (`fname`, `lname`, `id_no`, `email`, `cell`, `campus_loc`, `title`, `pwd`) VALUES
('themba', '0', 2147483647, 'thembaantuli@gmail.com', 835113602, 'Soshanguve South', 'Mr', ''),
('themba', 'ntuli', 2147483647, 'thembaantuli@gmail.com', 835113602, 'Soshanguve South', 'Mr', 'gsjhkjlkjh55'),
('thembaa', 'ntuli', 2147483647, 'thembaantuli@gmail.com', 835113602, 'Soshanguve South', 'Mr', 'gsjhkjlkjh55');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `First_name` longtext DEFAULT NULL,
  `Last_name` longtext DEFAULT NULL,
  `email` longtext DEFAULT NULL,
  `passwrd` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
