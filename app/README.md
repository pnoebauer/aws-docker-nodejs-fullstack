# Docker Node MongoDB Example

> Simple example of a dockerized Node/Mongo app

## Quick Start

```bash
# Run in Docker
docker-compose up
# use -d flag to run in background

# Tear down
docker-compose down

# To be able to edit files, add volume to compose file
volumes: ['./:/usr/src/app']

# To re-build
docker-compose build
```

## Test MongoDB Connection

You can test the MongoDB connection using the following command:

```bash
docker exec -it docker-app-1 node /usr/src/app/test-mongo-connection.js
```

Replace `docker-app-1` with the actual container name, which you can find using:
```bash
docker ps -a
```