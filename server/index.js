const { Prisma } = require('prisma-binding');

const prisma = new Prisma({
  typeDefs: 'generated/prisma.graphql',
  endpoint: '__YOUR_PRISMA_ENDPOINT__'
});

prisma.mutation
  .createUser({ data: { name: 'Alex New' } }, '{ id name }')
  .then(console.log);
