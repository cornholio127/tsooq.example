# tsooq example application
Simple REST API using tsooq

## Installation

```
npm install
npm run gen
```

## Database
Use your existing instance of Postgresql or run the docker image provided in this example.

### Build the database image
```
cd docker
cd db
docker build -t tsooqexampledb .
```

### Run the database container
```
docker-compose up
```
Now create the schema by running the database/init.sql.

## Start the server
```
npm start
```
