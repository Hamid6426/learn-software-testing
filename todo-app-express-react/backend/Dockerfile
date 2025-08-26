FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install
# Install nodemon globally for live reload
RUN npm install -g nodemon

# Copy source code
COPY . .

# Expose the backend port
EXPOSE 8000

# Default command for dev (can be overridden in docker-compose)
CMD ["nodemon", "index.js"]
