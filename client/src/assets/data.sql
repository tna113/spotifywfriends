--
-- Database: `theaaria_spotifywfriends`
--

CREATE TABLE `user` (
    `username` varchar(20) NOT NULL PRIMARY KEY, 
    `password` varchar(20) DEFAULT 'ilovethea'
);

CREATE TABLE `sharedSongsPlaylist` (
    `sharedSongsId` int AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(255) NOT NULL,
    `username` varchar(20) NOT NULL,
    FOREIGN KEY (username) REFERENCES user(username)
);

CREATE TABLE `song` (
    `songId` int AUTO_INCREMENT PRIMARY KEY,
    `title` varchar(255) NOT NULL,
    `arist` varchar(255) NOT NULL,
    `spotifyLink` varchar(255) NOT NULL,
    `audioPreviewUrl` varchar(255) NOT NULL,
    `imgUrl` varchar(255) DEFAULT 'some url',
    `rating` int NOT NULL,
    `dateAdded` datetime DEFAULT NULL,
    `sharedSongsId` int NOT NULL,
    FOREIGN KEY (sharedSongsId) REFERENCES sharedSongsPlaylist(sharedSongsId)
);
