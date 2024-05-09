# Use the official Node.js 18.17 image as the base image
FROM node:18.17

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Unset NODE_ENV to ensure all dependencies are installed
RUN unset NODE_ENV

# Copy the rest of the application code to the working directory
COPY . .

# Install dependencies
RUN npm install
# Install nodemon globally for development mode
RUN npm install -g nodemon

# Build TypeScript files
RUN NODE_OPTIONS="--max-old-space-size=4096" npm run build

# Create coverage-report directory and make it writable
RUN mkdir -p /app/coverage-report
RUN chmod -R 777 /app/coverage-report

# Expose the port on which the application will run
EXPOSE 8000

# Define the command to run the application
CMD ["npm", "start"]