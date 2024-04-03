-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 03, 2024 at 11:54 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ims`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `name`, `email`, `password`) VALUES
(7, 'rigan', 'riganpaul567@gmail.com', '123456'),
(8, 'Antart', 'antar@gmail.com', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `productdetails`
--

CREATE TABLE `productdetails` (
  `id` int(11) NOT NULL,
  `productId` int(11) DEFAULT NULL,
  `ProductName` varchar(255) DEFAULT NULL,
  `date` date NOT NULL,
  `quantity` int(30) NOT NULL,
  `movementType` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `productdetails`
--

INSERT INTO `productdetails` (`id`, `productId`, `ProductName`, `date`, `quantity`, `movementType`) VALUES
(4, 0, 'Cycle', '0000-00-00', 0, ''),
(5, 0, NULL, '2024-05-04', 10, 'TP'),
(6, 0, 'Cat', '0000-00-00', 0, ''),
(7, 0, 'Guiter', '0000-00-00', 0, ''),
(8, 0, NULL, '2024-05-10', 5, 'GI'),
(9, 0, NULL, '2024-05-02', 5, 'TP'),
(10, 0, NULL, '2024-10-12', 5, 'TP'),
(11, 0, 'DOG', '0000-00-00', 0, '');

--
-- Triggers `productdetails`
--
DELIMITER $$
CREATE TRIGGER `productdetails_update_trigger` AFTER UPDATE ON `productdetails` FOR EACH ROW BEGIN
    UPDATE userview
    SET date = NEW.date,
    quantity = NEW.quantity,
    movementType = NEW.movementType
    WHERE id = NEW.id; -- Adjust the condition based on your schema
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `productId` int(11) DEFAULT NULL,
  `name` text NOT NULL,
  `price` int(10) NOT NULL,
  `description` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `productId`, `name`, `price`, `description`) VALUES
(31, 0, 'Cycle', 7900, 'Duronto Bycycle'),
(32, 0, 'Cat', 5000, 'Cute'),
(33, 0, 'Guiter', 12000, 'Yamaha Best Sound'),
(34, 0, 'DOG', 2700, 'Golden Retriver');

--
-- Triggers `products`
--
DELIMITER $$
CREATE TRIGGER `products_update_trigger` AFTER UPDATE ON `products` FOR EACH ROW BEGIN
    UPDATE userview
    SET productId = NEW.productId,
    name = NEW.name,
    price = NEW.price,
    description = NEW.description
    WHERE id = NEW.id; -- Adjust the condition based on your schema
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `userview`
--

CREATE TABLE `userview` (
  `id` int(11) NOT NULL,
  `productId` int(11) DEFAULT NULL,
  `name` text NOT NULL,
  `price` int(30) NOT NULL,
  `description` varchar(100) NOT NULL,
  `date` date NOT NULL,
  `quantity` varchar(20) NOT NULL,
  `movementType` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userview`
--

INSERT INTO `userview` (`id`, `productId`, `name`, `price`, `description`, `date`, `quantity`, `movementType`) VALUES
(19, 0, 'Cycle', 7900, 'Duronto Bycycle', '0000-00-00', '', ''),
(20, 0, '', 0, '', '2024-05-04', '10', 'TP'),
(21, 0, 'Cat', 5000, 'Cute', '0000-00-00', '', ''),
(22, 0, 'Guiter', 12000, 'Yamaha Best Sound', '0000-00-00', '', ''),
(23, 0, '', 0, '', '2024-05-10', '5', 'GI'),
(24, 0, '', 0, '', '2024-05-02', '5', 'TP'),
(25, 0, '', 0, '', '2024-10-12', '5', 'TP'),
(26, 0, 'DOG', 2700, 'Golden Retriver', '0000-00-00', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productdetails`
--
ALTER TABLE `productdetails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userview`
--
ALTER TABLE `userview`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `productdetails`
--
ALTER TABLE `productdetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `userview`
--
ALTER TABLE `userview`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
