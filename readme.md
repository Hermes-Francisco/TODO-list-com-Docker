# ToDo-list com Docker

## Requisitos:
    - docker
    - docker-compose

## Como instalar:

Para que o todo list funcione, é necessário instalar as dependências do node, primeiro. Para fazer isso, basta rodar os comandos:
- `docker-compose run web npm ci` 
- `docker-compose run api npm ci`
 
depois disso, é só rodar o `docker-compose up` que a aplicação irá funcionar.

A API estará disponível no `localhost:3000` e a interface web no `localhost:8080`
