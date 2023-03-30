# Specify a base image
FROM node:18-alpine

# Setting a working directory of docker
WORKDIR /app

# Copy files in the current working directory to the docker working directory
COPY package.json .

# Install some dependencies
RUN npm install

# Separate copy command (package.json and the others) not to reinstall packages when only source codes are changed
COPY . .

# Default command
CMD ["npm","start"]