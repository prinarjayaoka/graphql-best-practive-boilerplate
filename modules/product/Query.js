const typeDefs = `
  type Query {
    product: [Product!]!
  }
`

const resolvers = {
    Query: {
        product: async(parents, args, context) => {
            const { models } = context;
            const product = await models.Product.findAll();
            return product
            
        }
    }
}

module.exports = { typeDefs, resolvers }