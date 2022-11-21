<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Run in develop

1. Clone the project
2. Run
```
npm i -g yarn
yarn install
```
## Install
3. Have Nest CLI
```
npm i -g @nestjs/cli
```

## Database
```
docker-compose up -d
```

## Env

Clone file __.env.template__ and rename the new file to __.env__

Fill the defined variables in __.env__

Run application in dev with

```
npm run start:dev
```

## Insert Seeds

Use the following endpoint

```
http://localhost:3000/api/v2/seed
```

## Stack 
* MongoDB
* Nest

