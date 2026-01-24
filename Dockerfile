# Stage 1: Build
FROM node:20 AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Stage 2: Runtime
FROM node:20-slim AS runner
WORKDIR /app

# Copy only runtime files
COPY package*.json ./
RUN npm install --omit=dev

# Copy build output from builder
COPY --from=builder /app/build ./build

# Expose port
EXPOSE 3000

# Add curl for healthcheck
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Healthcheck (point to /health or /)
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s \
  CMD curl --fail --silent http://127.0.0.1:5173/ || exit 1

# Start the app
CMD ["node", "build"]