# Use official Node image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Update Alpine packages
RUN apk update && apk upgrade

# Copy lockfile first to leverage Docker cache
COPY package.json ./

# Install dependencies
RUN npm install

# Install nodemon globally for live reload
RUN npm install -g nodemon

# Expose the backend port
EXPOSE 8000

# Default command for dev (can be overridden in docker-compose)
CMD ["nodemon", "index.js"]
