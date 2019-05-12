FROM node

WORKDIR /restapi

COPY package.json /restapi

RUN npm install

COPY . /restapi

CMD node server.js

EXPOSE 8080