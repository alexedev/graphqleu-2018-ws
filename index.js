const fetch = require('node-fetch');

const endpoint = 'https://eu1.prisma.sh/alex-alexeev/gqlws/dev';

const query = `
  query {
    users {
      id
      name
    }
  }
`;

fetch(endpoint, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: query })
})
  .then(response => response.json())
  .then(result => console.log(JSON.stringify(result)));
