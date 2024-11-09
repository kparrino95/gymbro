const server = require('../src/config/server');
const { connectDB } = require('../src/config/database');

connectDB();

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
