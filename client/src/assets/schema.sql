--
-- Database: 'theaaria_spotifywfriends'
--

CREATE TABLE IF NOT EXISTS `user` (
    `userId` int AUTO_INCREMENT PRIMARY KEY,
    `username` varchar(20) NOT NULL, 
    `password` varchar(20) DEFAULT 'ilovethea',
    `role` varchar(20) NOT NULL,
    `playlistId` int NOT NULL,
    FOREIGN KEY (playlistId) REFERENCES userPlaylist(playlistId)
);

CREATE TABLE IF NOT EXISTS `userPlaylist` (
    `userId` int PRIMARY KEY,
    `playlistId` int PRIMARY KEY,
    FOREIGN KEY (userId) REFERENCES user(userId),
    FOREIGN KEY (playlistId) REFERENCES playlist(playlistId)
);

-- INSERT INTO `user` (`username`,`role`) VALUES ('musloom','admin'), ('user','user');

CREATE TABLE IF NOT EXISTS `playlist` (
    `playlistId` int AUTO_INCREMENT PRIMARY KEY,
    `playlistName` varchar(255) NOT NULL,
    `userId` int NOT NULL,
    FOREIGN KEY (userId) REFERENCES userPlaylist(userId)
);

-- INSERT INTO `sharedSongsPlaylist` (`playlistName`, `userId`) VALUES ('test playlist', 2);

CREATE TABLE IF NOT EXISTS `playlistSongs` (
    `playlsitId` int PRIMARY KEY,
    `songId` int PRIMARY KEY,
    FOREIGN KEY (playlistId) REFERENCES playlist(playlistId),
    FOREIGN KEY (songId) REFERENCES song(songId)
);

CREATE TABLE IF NOT EXISTS `song` (
    `songId` int AUTO_INCREMENT PRIMARY KEY,
    `title` varchar(255) NOT NULL,
    `spotifyLink` varchar(255) NOT NULL,
    `audioPreviewUrl` varchar(255) NOT NULL,
    `imgUrl` varchar(255) DEFAULT 'some url',
    `rating` int NOT NULL,
    `dateAdded` datetime DEFAULT NULL,
    `comment` varchar(255) DEFAULT 'some comment',
    `artistId` int NOT NULL,
    FOREIGN KEY (artistId) REFERENCES songArtist(artistId)
);

-- INSERT INTO `song` (`title`, `artist`, `spotifyLink`, `audioPreviewUrl`, `rating`, `dateAdded`, `sharedSongsId`)  VALUES ('on 10', 'desin conrad', 'https://open.spotify.com/track/5qPcrnvubBiYudhiPcpPIK?si=1935593306ac4683','preview url', 5, '2024-01-01 00:00:00', 1);

CREATE TABLE IF NOT EXISTS `songArtist` (
    `songId` int PRIMARY KEY,
    `artistId` int PRIMARY KEY,
    FOREIGN KEY (songId) REFERENCES song(songId),
    FOREIGN KEY (artistId) REFERENCES artist(artistId)
);

CREATE TABLE IF NOT EXISTS 'artist' (
    `artistId` int PRIMARY KEY,
    `artistName` varchar(255) NOT NULL,
    `songId` int NOT NULL,
    FOREIGN KEY (songId) REFERENCES songArtist(songId)
);