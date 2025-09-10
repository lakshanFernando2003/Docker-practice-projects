# base image
FROM node:22-alpine

# set working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy the rest of the application code
COPY . .

# Create a .env file at build time with the Docker API URL
RUN echo "VITE_API_URL=http://server:5000/api" > .env

# expose the application port
EXPOSE 5173

# start the application with host parameter
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
