#!/bin/bash

# Install dependencies in the client folder
cd client
npm install
npm run build
npm run start &
cd ..

# Install dependencies in the MZNWebserver folder
cd MZNWebserver
npm install
node index.js &
cd ..

# Start Pocketbase
cd pocketbase
./pocketbase_linux serve &

