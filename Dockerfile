# Use the base image from Docker Hub
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
# COPY package.json package-lock.json ./
COPY package*.json ./  

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your app will run on
EXPOSE 3000

# Start the application
CMD [ "npm" , "run" , "dev" ]