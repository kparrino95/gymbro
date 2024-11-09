let users = [];

const resolvers = {
  Query: {
    getUsers: () => users,
    getUser: (_, { id }) => users.find(user => user.id === id),
  },
  Mutation: {
    addUser: (_, { name, email }) => {
      const newUser = { id: users.length + 1, name, email };
      users.push(newUser);
      return newUser;
    }
  }
};

module.exports = resolvers;
