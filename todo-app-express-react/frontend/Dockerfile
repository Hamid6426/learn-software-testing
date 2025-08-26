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

# Expose Vite dev server port
EXPOSE 5173

# Default command for dev (can be overridden in docker-compose)
CMD ["npm", "run", "dev", "--", "--host", "--port", "5173"]
