@echo off

REM Install and start the client
echo Installing dependencies for the client...
cd client
call npm install
echo Client dependencies installed.

REM Open a new terminal for the client
START cmd /k "echo Building and starting the client... && npm run build && npm run start"
cd ..

cd MZNWebserver
echo Installing dependencies for the MZNWebserver...
call npm install
echo MZNWebserver dependencies installed.

REM Open a new terminal for the MZNWebserver
START cmd /k "echo Starting the MZNWebserver... && node index.js"
cd ..

cd pocketbase
REM Open a new terminal for Pocketbase
START cmd /k "echo Starting Pocketbase... && pocketbase_windows serve"
cd ..