# Base image
FROM node:22

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Expose the app port
EXPOSE 8000

# Run the application
CMD ["npm", "start"]
