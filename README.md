the command are :\n
docker ps --all \n
docker ps \n
docker build . \n
docker build -t <name> . \n
docker run <name>\n
docker run docker.io/milodey/nodeapp\n
docker run -p <local-port>:<docker-port> <name>\n
docker run -p 8000:8000 nodeapp\n
docker exec -it <container-id> bash\n
docker exec -it <container-id> sh\n
docker stop <container-id>\n
docker rm <container-id>\n
docker kill <container-id>\n


#to kill all the container \n
command : docker container prune\n

docker-compose up\n
docker-compose up --build\n
docker-compose up -d\n
docker-compose down\n
docker-compose down --volumes\n
docker-compose logs\n

