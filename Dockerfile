FROM node:latest




# Use Node.js v14
ENV REFRESHED_AT 2015-01-19


# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package.json ./

RUN npm install -g json-server


RUN apt-get update
RUN apt-get upgrade -y

RUN apt-get install -y nodejs

# needs this to find the nodejs exec


RUN apt-get install -y npm
RUN /usr/bin/npm install ws

# Bundle app source
COPY . .

# Expose the port
EXPOSE 3000


ENTRYPOINT ["/usr/bin/node", "/root/server.js"]
