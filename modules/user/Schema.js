const typeDefs = `
  type User{
    id:ID!
    firstName:String!
    lastName: String!
    username: String!
    password: String!
  }
`

const resolvers = {}

module.exports = { typeDefs, resolvers }
