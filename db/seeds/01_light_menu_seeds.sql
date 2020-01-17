INSERT INTO users (name, email, phone) VALUES ('Alice', 'a@a.com', 123456);
INSERT INTO users (name, email, phone) VALUES ('Kira', 'b@b.com', 234567);
INSERT INTO users (name, email, phone) VALUES ('c', 'c@c.com', 345678);
INSERT INTO users (name, email, phone) VALUES ('d', 'd@d.com', 456789);

INSERT INTO foodtypes (name, description) VALUES ('Main Course', 'this is main course');
INSERT INTO foodtypes (name, description) VALUES ('Desserts', 'this is desserts');
INSERT INTO foodtypes (name, description) VALUES ('Drinks', 'this is drinks');

INSERT INTO lightmenus (name, description, price, URL_thumnail, URL_full, cook_time, foodtype_id) VALUES
('Chicken Noodle Soup', 'Juicy!', 9, 'URL_thumnail', 'URL_full', 7, 1);
INSERT INTO lightmenus (name, description, price, URL_thumnail, URL_full, cook_time, foodtype_id) VALUES
('Beef Noodle Soup', 'Juicy!', 13, 'URL_thumnail', 'URL_full', 8, 2);
INSERT INTO lightmenus (name, description, price, URL_thumnail, URL_full, cook_time, foodtype_id) VALUES
('Chicken & Corn Noodle Soup', 'Very good!', 11, 'URL_thumnail', 'URL_full', 19, 2);
INSERT INTO lightmenus (name, description, price, URL_thumnail, URL_full, cook_time, foodtype_id) VALUES
('Won Ton Noodle Soup', 'Very good!', 10, 'URL_thumnail', 'URL_full', 19, 2);
INSERT INTO lightmenus (name, description, price, URL_thumnail, URL_full, cook_time, foodtype_id) VALUES
('Siu Mai', 'Very good!', 10, 'URL_thumnail', 'URL_full', 5, 2);
INSERT INTO lightmenus (name, description, price, URL_thumnail, URL_full, cook_time, foodtype_id) VALUES
('Xiao Long Bao', 'Very good!', 9, 'URL_thumnail', 'URL_full', 15, 2);
INSERT INTO lightmenus (name, description, price, URL_thumnail, URL_full, cook_time, foodtype_id) VALUES
('Jiu Cai Bao', 'Very good!', 7, 'URL_thumnail', 'URL_full', 20, 2);
INSERT INTO lightmenus (name, description, price, URL_thumnail, URL_full, cook_time, foodtype_id) VALUES
('Goy Chow Gao', 'Very good!', 8, 'URL_thumnail', 'URL_full', 5, 2);
