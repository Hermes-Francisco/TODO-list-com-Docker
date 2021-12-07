FROM node:alpine

WORKDIR /usr/web
COPY ./ ./
RUN npm install
EXPOSE 3000

ENTRYPOINT [ "node", "hello.js" ]