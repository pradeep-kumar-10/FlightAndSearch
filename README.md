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
        
## DB Design
  - City
  - Airplane 
  - Flight
  - Airport
   

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport

  
## Tables

City -> id, name, created_at, updated_at
Airport -> id, name, address, city_id, created_at, updated_at

    Relationship -> City has many airports and Airport belongs to a city (one to many)
