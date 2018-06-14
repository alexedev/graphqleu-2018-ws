const { Prisma } = require('prisma-binding');

const prisma = new Prisma({
  typeDefs: 'generated/prisma.graphql',
  endpoint: 'https://eu1.prisma.sh/alex-alexeev/gqlws/dev'
});

prisma.mutation
  .createUser({ data: { name: 'Alex 7' } }, '{ id name }')
  .then(response =>
    prisma.mutation.createPost({
      data: {
        title: `Post by ${response.name}`,
        content: 'text here',
        author: {
          connect: {
            id: response.id
          }
        }
      }
    })
  )
  .then(console.log)
  .then(() => prisma.query.users(null, '{id name posts {title}}'))
  .then(console.log)
  .then(() => prisma.mutation.deleteManyPosts())
  .then(console.log)
  .then(() => prisma.mutation.deleteManyUsers())
  .then(console.log);
