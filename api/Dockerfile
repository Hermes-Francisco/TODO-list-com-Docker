FROM node:alpine

WORKDIR /usr/api
COPY ./ ./
RUN npm install
EXPOSE 3000

ENTRYPOINT [ "node", "./src/server.js" ]