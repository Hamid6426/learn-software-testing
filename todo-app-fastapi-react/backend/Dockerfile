# Use official Python image
FROM python:3.12-slim

# Set working directory
WORKDIR /app

# Upgrade pip
RUN pip install --upgrade pip

# Copy requirements first for caching
COPY requirements.txt ./ 

# Install dependencies
RUN pip install -r requirements.txt

# Copy the rest of the app
COPY . .

# Expose backend port
EXPOSE 8000

# Default command
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
