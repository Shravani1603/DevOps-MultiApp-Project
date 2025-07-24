# Use Node base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the app code
COPY . .

# Run the app
CMD ["npm", "start"]
