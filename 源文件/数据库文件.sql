/*
SQLyog Ultimate v11.33 (64 bit)
MySQL - 5.7.19-log : Database - musics
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`musics` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `musics`;

/*Table structure for table `musics` */

DROP TABLE IF EXISTS `musics`;

CREATE TABLE `musics` (
  `mName` varchar(30) NOT NULL,
  `mSinger` varchar(30) NOT NULL,
  `mPlay` varchar(30) NOT NULL,
  `mSrc` varchar(100) NOT NULL,
  `iSrc` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `musics` */

insert  into `musics`(`mName`,`mSinger`,`mPlay`,`mSrc`,`iSrc`) values ('体面','于文文','3023万',' mp3/体面.mp3','img/体面.jpg'),('I Am You','Kim Taylor','4679万','mp3/I Am You.mp3','img/I Am You.jpg'),('Stay With Me','灿烈/Punch','3421万','mp3/Stay With Me.mp3','img/Stay With Me.jpg'),('The truth that you leave','Pianoboy高至豪','3986万','mp3/The truth that you leave.mp3','img/The truth that you leave.jpg'),('爱了很久的朋友','田馥甄','2765万','mp3/爱了很久的朋友.mp3','img/爱了很久的朋友.jpg'),('春夏秋冬','张国荣','4678万','mp3/春夏秋冬.mp3','img/春夏秋冬.jpg'),('很好听的纸短情长','佚名','0','mp3/很好听的纸短情长.mp3','img/很好听的纸短情长.jpg'),('我们','陈奕迅','2934万','mp3/我们.mp3','img/我们.jpg'),('我真的受伤了','张学友','4203万','mp3/我真的受伤了.mp3','img/我真的受伤了.jpg'),('一生所爱','卢冠廷','4721万','mp3/一生所爱.mp3','img/一生所爱.jpg'),('这份爱','Davichi','3498万','mp3/这份爱.mp3','img/这份爱.jpg'),('Faded','Alan Walker','6344万','mp3/Faded.mp3','img/Faded.jpg'),('浮夸','陈奕迅','3943万','mp3/浮夸.mp3','img/浮夸.jpg'),('平凡之路','朴树','3823万','mp3/平凡之路.mp3','img/平凡之路.jpg'),('奇迹再现','毛毛','3535万','mp3/奇迹再现.mp3','img/奇迹再现.jpg'),('孤单心事','颜人中','1733万','mp3/孤单心事.mp3','img/孤单心事.jpg'),('We Don\'t Talk Anymore','Charlie Puth/Selena Gomez','4234万','mp3/We Don\'t Talk Anymore.mp3','img/We Don\'t Talk Anymore.jpg'),('Love The Way You Lie','Eminem/Rihanna','4567万','mp3/Love The Way You Lie.mp3','img/Love The Way You Lie.jpg'),('Beautiful Now','Zedd/Jon Bellion','3984万','mp3/Beautiful Now.mp3','img/Beautiful Now.jpg'),('脸红的思春期','우주를/줄게','3245万','mp3/脸红的思春期.mp3','img/脸红的思春期.jpg'),('Way Back Home','숀(SHAUN)','3354万','mp3/Way Back Home.mp3','img/Way Back Home.jpg'),('Trip','Axero ','3333万','mp3/Trip.mp3','img/Trip.jpg'),('够钟','周柏豪','3945万','mp3/够钟.mp3','img/够钟.jpg'),('无赖','郑中基','3743万','mp3/无赖.mp3','img/无赖.jpg'),('My Destiny','린(LYn)','4213万','mp3/My Destiny.mp3','img/My Destiny.jpg'),('You','Approaching Nirvana','2345万','mp3/You.mp3','img/You.jpg'),('Tassel','Cymophane','2103万','mp3/Tassel.mp3','img/Tassel.jpg'),('Refrain','Anan Ryoko','2411万','mp3/Refrain.mp3','img/Refrain.jpg'),('Journey','Capo Producitions','2298万','mp3/Journey.mp3','img/Journey.jpg'),('Flower Dance','DJ Okawari','2366万','mp3/Flower Dance.mp3','img/Flower Dance.jpg'),('Because of You','Kelly Clarkson','2123万','mp3/Because of You.mp3','img/Because of You.jpg'),('A Little Story','Valentin','2932万','mp3/A Little Story.mp3','img/A Little Story.jpg');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(30) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

/*Data for the table `users` */

insert  into `users`(`id`,`username`,`password`) values (1,'aa','aa');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
