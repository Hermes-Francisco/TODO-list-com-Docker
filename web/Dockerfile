FROM node:alpine

WORKDIR /usr/web
COPY ./ ./
RUN npm install
EXPOSE 8080

ENTRYPOINT [ "node", "hello.js" ]