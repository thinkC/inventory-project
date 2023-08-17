# Use the official Node.js 18 image as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Enable verbose output during npm install
RUN npm install --verbose

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port your backend listens on (e.g., 3000)
EXPOSE 3001

# Command to run your backend server
CMD ["npm", "start"]