# GraphQL Europe workshop: Build GraphQL servers with Node & Prisma

![](https://imgur.com/eMvvZcy.png)

## Demo 1

### Used commands

#### Install Prisma globally

```bash
npm install -g prisma
# OR
yarn global add prisma
```

#### Initialize Prisma server

```bash
prisma init your-project-name
```

> **Note**: Select **Demo server** and register with Prisma Cloud (e.g. using your GitHub account)

#### Deploy Prisma service

```bash
cd your-project-name
prisma deploy
```

> **Note**: Do it each time you update the schema for now (we will add a post-deploy hook later )

#### Play with Prisma API (send some queries)

```bash
prisma playground
```

### Steps (check out if you get lost)

1. [Prisma initiated with default data model](https://github.com/alexedev/graphqleu-2018-ws/tree/v0)

    ```bash
    git checkout v0
    ```

2. [Data model updated with `Post` type](https://github.com/alexedev/graphqleu-2018-ws/tree/v1)

    ```bash
    git checkout v1
    ```

## Demo 2

### Used commands

_For `fetch` example:_

```bash
yarn init -y
yarn add node-fetch
```

**Install Prisma bindings**

```bash
yarn add prisma-binding graphql
```

**Install [graphq-cli](https://github.com/graphql-cli/graphql-cli) to download Prisma's auto-generated GraphQL schema**

```bash
yarn global add graphql-cli
```

**Get remote schema (after adding .graphqlconfig.yml)**

```bash
graphql get-schema
```

### Steps (check out if you get lost)

3. [Example of calling prisma gql queries with `fetch`](https://github.com/alexedev/graphqleu-2018-ws/tree/v1.1)

    ```bash
    git checkout v1.1
    ```

4. [Clean up before adding Prisma bindings](https://github.com/alexedev/graphqleu-2018-ws/tree/v2)

    ```bash
    git checkout v2
    ```

5. [Instantiate `Prisma` bindings](https://github.com/alexedev/graphqleu-2018-ws/tree/v2.1)

    ```bash
    git checkout v2.1
    ```

6. [Add `Prisma` bindings example](https://github.com/alexedev/graphqleu-2018-ws/tree/v2.2)

    ```bash
    git checkout v2.2
    ```