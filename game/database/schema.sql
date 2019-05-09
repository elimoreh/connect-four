DROP DATABASE IF EXISTS scoreboard_data;
CREATE DATABASE scoreboard_data;
USE scoreboard_data;

DROP DATABASE IF EXISTS scoreboard;
CREATE TABLE scoreboard
(
  id INT AUTO_INCREMENT UNIQUE,
  player VARCHAR(20) NOT NULL,
  score INT
);

INSERT INTO scoreboard(player, score) VALUES ("red", 0), ("yellow", 0);


