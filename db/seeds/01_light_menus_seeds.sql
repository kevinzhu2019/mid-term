INSERT INTO users (name, email, phone) VALUES ('Alice', 'a@a.com', 123456);
INSERT INTO users (name, email, phone) VALUES ('Kira', 'b@b.com', 234567);
INSERT INTO users (name, email, phone) VALUES ('c', 'c@c.com', 345678);
INSERT INTO users (name, email, phone) VALUES ('d', 'd@d.com', 456789);

INSERT INTO foodtypes (name, description) VALUES ('Main Course', 'this is main course');
INSERT INTO foodtypes (name, description) VALUES ('Desserts', 'this is desserts');
INSERT INTO foodtypes (name, description) VALUES ('Drinks', 'this is drinks');

INSERT INTO lightmenus (name, description, price, URL_thumnail, URL_full, cook_time, foodtype_id) VALUES
('Noodle', 'Hot with soup', 99.99, 'URL_thumnail', 'URL_full', 15, 1);
INSERT INTO lightmenus (name, description, price, URL_thumnail, URL_full, cook_time, foodtype_id) VALUES
('Sushi', 'rice and sashimi', 109.99, 'URL_thumnail', 'URL_full', 17, 1);
INSERT INTO lightmenus (name, description, price, URL_thumnail, URL_full, cook_time, foodtype_id) VALUES
('Wonton', 'Very delicous', 119.99, 'URL_thumnail', 'URL_full', 19, 1);
INSERT INTO lightmenus (name, description, price, URL_thumnail, URL_full, cook_time, foodtype_id) VALUES
('Chocolate something', 'delicous', 11.99, 'URL_thumnail', 'URL_full', 19, 2);
INSERT INTO lightmenus (name, description, price, URL_thumnail, URL_full, cook_time, foodtype_id) VALUES
('Red wine', 'dont drink too much!', 5.99, 'URL_thumnail', 'URL_full', 5, 3);
INSERT INTO lightmenus (name, description, price, URL_thumnail, URL_full, cook_time, foodtype_id) VALUES
('Steaks', 'Juicy!', 22.99, 'URL_thumnail', 'URL_full', 5, 1);


