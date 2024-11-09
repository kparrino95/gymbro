const { db } = require('../config/database');

const resolvers = {
  Query: {
    getUser: (_, { id }) => users.find(user => user.id === id),
    getUsers: () => db.select('users')
  },
  Mutation: {
    addUser: async (_, { name, email }) => {
      const [newUser] = await db.create("user", { name, email });
      return newUser;
    }
  }
};

module.exports = resolvers;
