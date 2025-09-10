# dockerfile for the server
FROM node:22-alpine

RUN npm install -g nodemon

# set working directory
WORKDIR /app

# copy package files first for better caching
COPY package*.json ./

# install dependencies
RUN npm install

# copy the files
COPY . .

# expose PORT
EXPOSE 5000

CMD ["npm", "run", "start"]
