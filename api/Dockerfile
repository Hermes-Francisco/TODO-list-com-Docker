FROM node:alpine

WORKDIR /usr/api
COPY ./ ./
RUN npm install
EXPOSE 8080

ENTRYPOINT [ "node", "./src/server.js" ]