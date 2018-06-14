# GraphQL Europe workshop: Build GraphQL servers with Node & Prisma

## DEMO 1

### Used commands

#### Install Prisma globally

    npm install -g prisma
    OR
    yarn global add prisma

#### Initialize Prisma server

    prisma init your-project-name

_note:_ select Demo server (Prisma Cloud) and register with GitHub account

#### Deploy Prisma service

        cd your-project-name
        prisma deploy

_note:_ do it each time you update the schema for now (we will add a post-deploy hook later )

#### Play with Prisma API (send some queries)

    prisma playground

### Steps (check out if you get lost)

1.  [Prisma initiated with default schema](https://github.com/alexedev/graphqleu-2018-ws/tree/v0)

        git checkout v0

2)  [Schema updated with Post type](https://github.com/alexedev/graphqleu-2018-ws/tree/v1)

        git checkout v1

## DEMO 2

### Used commands

_For fetch example:_

    yarn init -y
    yarn add node-fetch

**Install Prisma bindings**

    yarn add prisma-binding graphql

**Install graphq-cli to get remote schema**

    yarn global add graphql-cli

**Get remote schema (after adding .graphqlconfig.yml)**

    graphql get-schema

### Steps (check out if you get lost)

3.  [Example of calling prisma gql queries with fetch](<(https://github.com/alexedev/graphqleu-2018-ws/tree/v1.1)>)

        git checkout v1.1

4.  [Clean up before adding prisma bindings](<(https://github.com/alexedev/graphqleu-2018-ws/tree/v2)>)

        git checkout v2

5.  [Instantiate Prisma bindings](<(https://github.com/alexedev/graphqleu-2018-ws/tree/v2.1)>)

        git checkout v2.1

6.  [Add Prisma bindings example](<(https://github.com/alexedev/graphqleu-2018-ws/tree/v2.2)>)

        git checkout v2.2
