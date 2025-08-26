# Use official Node image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Default command for dev (can be overridden in docker-compose)
CMD ["npm", "run", "dev", "--", "--host", "--port", "5173"]
