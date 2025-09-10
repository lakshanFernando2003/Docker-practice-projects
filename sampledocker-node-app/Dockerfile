# base Image
FROM node:20-alpine

# working directory
WORKDIR /app

# install dependencies
COPY package.json .

# install dependencies
RUN npm install

# copy the  files
COPY . .

# run the app
CMD ["npm", "start"]
