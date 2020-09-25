CREATE TABLE room (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL DEFAULT '',
  ctime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  utime TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT room (id, title) VALUES (NULL, "Room1");
INSERT room (id, title) VALUES (NULL, "Room2");