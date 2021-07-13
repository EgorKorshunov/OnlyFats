### OnlyFats Getting Started
#

In order to run the application locally (DEV MODE)
* install the packages in client && backend && main `npm run inst`
* run only backend `npm run start:server`
* run only frontend `npm run start_client`
* run backend and frontend in same time `npm run start`



### MongoDB
To run mongoDB locally using docker-compose
* make sure that docker-compose is installed on your machine locally, see https://docs.docker.com/compose/install/
* `$ sudo docker-compose up -d`
* `sudo docker ps`
* `sudo docker stop CONTAINER_NAME`
* `sudo docker rm CONTAINER_NAME`