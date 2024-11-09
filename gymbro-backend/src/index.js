const server = require('../src/config/server');

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
