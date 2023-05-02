# bring base images
FROM node:alpine

# Create a working directory
WORKDIR /usr/nodeapp

# Bring all the files
COPY ./package.json ./

# Run insaller
RUN npm i
COPY ./ ./

# Default command
CMD [ "npm","start" ]

