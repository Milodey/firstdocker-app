the command are :
docker ps --all
docker ps
docker build .
docker build -t <name> .
docker run <name>
docker run docker.io/milodey/nodeapp
docker run -p <local-port>:<docker-port> <name>
docker run -p 8000:8000 nodeapp
docker exec -it <container-id> bash
docker exec -it <container-id> sh
docker stop <container-id>
docker rm <container-id>
docker kill <container-id>

docker-compose up
docker-compose up --build
docker-compose up -d
docker-compose down
docker-compose down --volumes
docker-compose logs

