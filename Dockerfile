# Use the official Node.js image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and yarn.lock files
COPY package*.json ./

# Install global NestJS CLI if needed
RUN npm install -g @nestjs/cli

# Install dependencies using yarn
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the NestJS application
RUN yarn build

# Expose the port on which the app will run
EXPOSE 3002

# Define the command to run the app
CMD ["yarn", "start:prod"]
