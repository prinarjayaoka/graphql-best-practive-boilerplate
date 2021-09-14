const typeDefs = `
  type Product{
    id:ID!
    productName:String!
    productPrice: Int!
    productStock: Int!
  }
`

const resolvers = {}

module.exports = { typeDefs, resolvers }