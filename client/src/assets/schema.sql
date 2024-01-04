--
-- Database: 'theaaria_spotifywfriends'
--

CREATE TABLE IF NOT EXISTS `user` (
    `userId` int AUTO_INCREMENT PRIMARY KEY,
    `username` varchar(20) NOT NULL, 
    `password` varchar(20) DEFAULT 'ilovethea',
    `role` varchar(20) NOT NULL
);

-- INSERT INTO `user` (`username`,`role`) VALUES ('musloom','admin'), ('user','user');

CREATE TABLE IF NOT EXISTS `sharedSongsPlaylist` (
    `sharedSongsId` int AUTO_INCREMENT PRIMARY KEY,
    `playlsitName` varchar(255) NOT NULL,
    `userId` int NOT NULL,
    FOREIGN KEY (userId) REFERENCES user(userId)
);

-- INSERT INTO `sharedSongsPlaylist` (`playlsitName`, `userId`) VALUES ('test playlist', 2);

CREATE TABLE IF NOT EXISTS `song` (
    `songId` int AUTO_INCREMENT PRIMARY KEY,
    `title` varchar(255) NOT NULL,
    `artist` varchar(255) NOT NULL,
    `spotifyLink` varchar(255) NOT NULL,
    `audioPreviewUrl` varchar(255) NOT NULL,
    `imgUrl` varchar(255) DEFAULT 'some url',
    `rating` int NOT NULL,
    `dateAdded` datetime DEFAULT NULL,
    `comment` varchar(255) DEFAULT 'some comment',
    `sharedSongsId` int NOT NULL,
    FOREIGN KEY (sharedSongsId) REFERENCES sharedSongsPlaylist(sharedSongsId)
);

-- INSERT INTO `song` (`title`, `artist`, `spotifyLink`, `audioPreviewUrl`, `rating`, `dateAdded`, `sharedSongsId`)  VALUES ('on 10', 'desin conrad', 'https://open.spotify.com/track/5qPcrnvubBiYudhiPcpPIK?si=1935593306ac4683','preview url', 5, '2024-01-01 00:00:00', 1);