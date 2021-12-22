# Base image
# Make folder to put our files in
FROM node

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

# Command to run our app
EXPOSE 8080

CMD [ "npm", "start" ] 
