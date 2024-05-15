# Welcome to Flight Service

## Project Setup
    - clone the project on your local
    - Execute ``npm install` on the same path as of your root directory of teh downloaded project
    - Create a '.env' file in the root directory and add the following environment variable
        - PORT=3000
    - Inside the src/config folder 
        - Create a new file config.json
        - Add the following piece of json
            - "development": {
                "username": "YOUR_DB_LOGIN_NAME",
                "password": "YOUR_DB_LOGIN_PASSWORD",
                "database": "FLIGHT_SEARCH_DB_DEV",
                "host": "127.0.0.1",
                "dialect": "mysql"
                },
    - Once you've added your db config file
        - go to the src folder from your terminal 
        - execute npx sequelize db:create and then execute
            - npx sequelize db:migrate