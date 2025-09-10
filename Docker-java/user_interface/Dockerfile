# Build stage
FROM node:22-alpine

# set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

# install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Create .env file with API URL pointing to backend service
RUN echo "VITE_API_URL=http://backend:8080/api" > .env

# expose the port the app runs
EXPOSE 5173

# start the application with host parameter
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
