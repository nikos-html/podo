# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files from frontend directory
COPY frontend/package.json frontend/yarn.lock* ./

# Install dependencies
RUN yarn install --frozen-lockfile --network-timeout 100000

# Copy all frontend source files
COPY frontend/ ./

# Build the React app
RUN yarn build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Install serve globally
RUN npm install -g serve@14.2.0

# Copy built files from builder
COPY --from=builder /app/build ./build

# Expose port (Railway will set this dynamically)
EXPOSE $PORT

# Start the app on Railway's dynamic port
CMD serve -s build -l $PORT
