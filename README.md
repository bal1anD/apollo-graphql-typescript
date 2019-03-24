# About
This is a sample project which provides a starting point for using Apollo's graphql implementation with Typescript and express.

## Features
This includes 
1) Graphql endpoint which returns a simple Hello world message.
2) An express endpoint called `/health` which returns a sample "healthy" message

## What can you do with it?
Replace or build on top of the endpoints to play with the combination of apollo and typescript.


## Instructions

1. Clone this repo in your workspace
```
    git clone https://github.com/bal1anD/apollo-graphql-typescript.git
```
2. Navigate into the apollo-graphql-typescript directory and install all dependencies
```
    # install depedencies
    npm i
```
3. Start the service 
```
    npm run start
    or
    npm run dev #this provides auto-restart on changes
```
4. Open the routes and play with them
```
    #GraphQl route
    http://localhost:4000/graphql

    #Express route
    http://localhost:4000/health
```
