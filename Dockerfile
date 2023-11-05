# Use a Node.js base image
FROM node:18.18.2-alpine3.18

# Create a working directory in the container
WORKDIR /app

# Install `dotenv` globally
RUN npm install -g dotenv

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Load the .env file and export the PORT variable
RUN if [ -f .env ]; then export $(cat .env | xargs) && echo "PORT is set to $PORT"; fi

# Expose the port based on the PORT environment variable
EXPOSE $PORT

# Define the command to start your app conditionally based on NODE_ENV
CMD [ "sh", "-c", "if [ \"$NODE_ENV\" = \"local\" ]; then npm run start-local; else npm start; fi" ]
