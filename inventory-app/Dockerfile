# Use a lightweight Node.js 18 base image for building
FROM node:18-alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --verbose

# Copy the rest of the application files to the working directory
COPY . .

# Build the production version of the frontend
RUN npm run build

# Use a lightweight web server to serve the production build
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]