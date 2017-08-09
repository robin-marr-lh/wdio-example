FROM node:alpine

# setup our working driectory
WORKDIR /usr/app

# install dependencies (copy package.json only so these steps are cached independently)
COPY package.json .
COPY package-lock.json .
RUN apk add --no-cache python make g++
RUN npm install
RUN apk del --no-cache make g++ python

# copy the app
COPY sample-site/* ./sample-site/
COPY index.js .
COPY server.js .

# set the port to expose
EXPOSE 9876

# start the app
CMD [ "npm", "start" ]
