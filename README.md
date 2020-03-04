# Restaraunt Ordering Web App

![Front Page](https://github.com/kevinzhu2019/mid-term/blob/master/public/assets/Screen%20Shot%202020-03-05%20at%207.52.21%20AM.png?raw=true)
![Front Page Bottom](https://github.com/kevinzhu2019/mid-term/blob/master/public/assets/Screen%20Shot%202020-03-05%20at%207.52.34%20AM.png?raw=true)
![Ordering Page](https://github.com/kevinzhu2019/mid-term/blob/master/public/assets/Screen%20Shot%202020-03-05%20at%207.55.57%20AM.png?raw=true)
![Google Maps](https://github.com/kevinzhu2019/mid-term/blob/master/public/assets/Screen%20Shot%202020-03-05%20at%207.54.39%20AM.png?raw=true)

## Getting Started
1. On your vagrant virtual machine connect to the postgres server by entering the following into terminal:

psql -U vagrant -d template1

2. Then run the following commands:

CREATE ROLE labber WITH LOGIN password 'labber';
CREATE DATABASE midterm OWNER labber;

3. In a seperate terminal window, install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
