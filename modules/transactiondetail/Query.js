const typeDefs = `
type Query {
    transactionDetail(id: ID!): TransactionDetail
  }
`

const resolvers = {}

module.exports = { typeDefs, resolvers }