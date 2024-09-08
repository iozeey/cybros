# Use the official Node.js 14 image as a base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Remove any existing Yarn version
# RUN npm uninstall -g yarn || true

# Install the specific version of Yarn (1.22.21) with --force to ensure it overwrites any existing version
# RUN npm install -g yarn@1.22.21 --force

# Copy the package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install the dependencies
RUN yarn install

# Copy the rest of your application files to the container
COPY . .

# Expose port 5173 (or whichever port your React app is configured to run on)
EXPOSE 5173

# Start the React development server
CMD ["yarn", "start"]
