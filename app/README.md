# Docker Node MongoDB Example

> Simple example of a dockerized Node/Mongo app

## Quick Start

```bash
# Run in Docker
docker-compose up
# use -d flag to run in background

# Run in Docker and force rebuild
docker-compose up --build

# Tear down
docker-compose down

# To be able to edit files, add volume to compose file
volumes: ['./:/usr/src/app']

# To re-build
docker-compose build

# To re-build the app image only
cd app
docker build .

# To run the container and go inside via bash
docker run -it IMAGE_ID bash

# To run the container and go inside via nodemon
docker run -it IMAGE_ID nodemon

# build image and tag it
docker build -t pnoebauer/nodejs-fullstack-app:1.0 ./app

# push to docker hub
docker login
docker push pnoebauer/nodejs-fullstack-app

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

## Debugging

```bash
# Show all containers
docker ps

# Show logs
docker logs CONTAINER_ID

# Remove container and all its logs
docker rm CONTAINER_ID

# Live logs
docker attach CONTAINER_ID

# Show container info
docker inspect CONTAINER_ID

# Show images
docker images

# Cleanup unused images
docker image prune

# Cleanup all images not used by at least one container
docker image prune -a

# Cleanup all stopped containers
docker container prune

# Cleanup volumes not used by at least one container
docker volume prune

# Cleanup everything
docker volume prune