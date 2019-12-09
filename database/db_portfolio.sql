-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 09, 2019 at 03:52 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_project`
--

DROP TABLE IF EXISTS `tbl_project`;
CREATE TABLE IF NOT EXISTS `tbl_project` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `HEADING` text NOT NULL,
  `TAGLINE` text NOT NULL,
  `PROJECT_TITLE` text NOT NULL,
  `PROJECT_DESC` text NOT NULL,
  `VIDEO` varchar(50) NOT NULL,
  `IMAGE` varchar(50) NOT NULL,
  `DESC_TITLE` text NOT NULL,
  `DESCRIPTION` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_project`
--

INSERT INTO `tbl_project` (`ID`, `HEADING`, `TAGLINE`, `PROJECT_TITLE`, `PROJECT_DESC`, `VIDEO`, `IMAGE`, `DESC_TITLE`, `DESCRIPTION`) VALUES
(1, 'MusicMixer -<span>An Interactive Project</span>', '* Interactive Ocean Oasis for relaxation', 'Ocean Oasis', 'Used to make good use of the morphing technique in Cinema 4D to showcase anything. This was a commercial for no frills about a Holiday Sale.\r\n        <br><br>\r\n    <span>Role: </span>Coder.\r\n    <br>\r\n    Partner: Nour Al-Osman(Designer).', 'video/MusicMixer.mp4', '', 'Project Description', 'The commercial is about a sale that’s happening on food items due to the\r\nholiday season, the use of “racy rock” music is to make people more “into”\r\nthe commercial and grab their attention, also making it unique from other\r\nfood advertisements with slower or the “usual” kind of music, the\r\nspecification of the date is written at the end of the screen, “from Nov 27\r\nuntil Dec 15”, and the company, “No frills” logo and tagline appears at the\r\nend.<br><br>\r\nThe goal of the video is to spread the word about the holiday sale, it\r\nappeals to a wide range of audiences; families, parents, students etc. The\r\nmain takeaway of the commercial is that people know there is an ongoing\r\nsale and they come to the store and buy these items and more.'),
(2, 'Aesthetic Anastasia -<span>blog</span>', '* A colour blog', 'A colour blog', 'Aesthetic Anastasia is about a blog for Sarah Wager as an online color source for designers. The colour palettes are based of various works of designers and photographers.\r\n        <br><br>\r\n    <span>Role: </span>Designer and Developer.', '', 'images/ana-mockup.png', 'Project Description', 'We were meant to make a website baout anything we wanted and take phtotgraphs for it, All photographs were taken by me except for the \"blog\" section in the \"Home page\" which was a stock photo. This website was made through use of CSS and HTML only. \r\n\r\n    The logo was also made by me in illustrator. '),
(3, 'Interactive Infographic -<span>Infographic</span>', '* Great way to share lots of data in a simple way', 'Interactive<br>Infographic', 'An Infographic is simple way of telling a lot of information, The Interactive Infographic is a way of sharing information in a more interesting way where people can learn information.\r\n        <br><br>\r\n    <span>Role: </span>Designer and Developer.', 'video/Interactive-Video.mp4', '', 'Project Description', 'We were meant to make a website baout anything we wanted and take phtotgraphs for it, All photographs were taken by me except for the \"blog\" section in the \"Home page\" which was a stock photo. This website was made through use of CSS and HTML only. \r\n\r\n    The logo was also made by me in illustrator. '),
(4, 'Thames Valley Anglers Association -<span>Brand New Website</span>', '* Re-branding and renovating', 'Thames River Anglers Association', 'TRAA was formed by anglers concerned with the state of the fishery in the Thames River watershed, particularly the dwindling smallmouth bass population in the North Thames River.\r\n\r\nThey needed a renovation of their website to have a more modern look.\r\n', 'video/explainer-video.mp4', 'images/traa-mockup.png', '', 'The design of the TRAA was changed and renovated to something more modern, a video was made.\r\n\r\nThe TRAA is not a fishing club, although most members are anglers and share fishing as a common interest. We are a \"hands on\" environmental group who likes to work at a grass roots level.\r\n\r\nThe TRAA is a volunteer organization, governed by a formal constitution and by-laws. An elected Executive, with the guidence of the General Membership, sets the policies and direction for the TRAA.....'),
(5, 'Commercial -<span>Morphing</span>', '* Commercial made for an upcoming sale', 'Morphing<br>Commercial', 'Used to make good use of the morphing technique in Cinema 4D to showcase anything. This was a commercial for no frills about a Holiday Sale.\r\n        <br><br>\r\n    <span>Role: </span>Animator.', 'video/morph-commercial.mp4', '', '', 'The commercial is about a sale that’s happening on food items due to the\r\nholiday season, the use of “racy rock” music is to make people more “into”\r\nthe commercial and grab their attention, also making it unique from other\r\nfood advertisements with slower or the “usual” kind of music, the\r\nspecification of the date is written at the end of the screen, “from Nov 27\r\nuntil Dec 15”, and the company, “No frills” logo and tagline appears at the\r\nend.<br><br>\r\nThe goal of the video is to spread the word about the holiday sale, it\r\nappeals to a wide range of audiences; families, parents, students etc. The\r\nmain takeaway of the commercial is that people know there is an ongoing\r\nsale and they come to the store and buy these items and more.'),
(6, 'Re-branding -<span>Changing the look</span>', '* Re-branding the wendy\'s fast food chain', 'Re-branding Project', 'Changing the look of the known fast food restaurant and add re-branding it, taking a known restaurant and giving it another feel entirely, the new Wendy\'s ginger ale.', 'video/re-branding.mp4', '', '', 'Custom text and other graphic elements should be used to further communicate\r\nthe specifics of the beer or wine. All design features will need to have harmony with\r\nthe associated brand style.\r\n\r\nThe final design was to be presented as a realistic beer or wine bottle with a\r\nprofessional looking label. \r\n\r\nThis project needed to be presented in professional and believable way. This was done as an advertisement mockup showing the brand bottle. An advertisement you would\r\nsee in a magazine, such as the Food & Drink magazine from LCBO.\r\n');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
