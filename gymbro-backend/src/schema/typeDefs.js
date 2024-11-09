const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
  }

  type Query {
    getUsers: [User]
    getUser(id: Int!): User
  }

  type Mutation {
    addUser(name: String!, email: String!): User
  }
`;

module.exports = typeDefs;
