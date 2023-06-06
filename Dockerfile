FROM node:latest






# Create app directory
WORKDIR /home/server


RUN npm install -g json-server








COPY package.json /home/server/package.json

EXPOSE 3000


ENTRYPOINT ["json-server","package.json"]