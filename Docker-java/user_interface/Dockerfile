# Build stage
FROM node:22-alpine

# set working directory
WORKDIR /user_interface

# Copy package files and install dependencies
COPY package*.json ./

# install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# expose the port the app runs
EXPOSE 5173

# start the application with host parameter
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]




