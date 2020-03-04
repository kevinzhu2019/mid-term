# Restaraunt Ordering Web App

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
