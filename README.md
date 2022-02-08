# acerelocations

transportation and logistics software

### For Development

## Database (UBUNTU)
- curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
- echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
- sudo apt update
- sudo apt install mongodb-org
- sudo systemctl start mongod.service

## Backend

- Step 1: Change directory to backend `cd backend/`
- Step 2: `npm install`
- Step 3: `npm start`

## Frontend

- Step 1: Change directory to frontend `cd frontend/`
- Step 2: `npm install`
- Step 3: `npm start`

### Production

- Step 1: `npm install`
- Step 2: `npm run-script build`
- Step 3: `npm run-script deploy`
