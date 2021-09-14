const typeDefs = `
  type Query {
    transaction(id: ID!): Transaction
  }
`

const resolvers = {
    Query: {
        transaction: async(parent, args, context) => {
            const { models } = context;
            
            const tr =  await models.Transaction.findOne({where:{
                 id: args.id
                 },
                 include: [
                     {model: models.User},
                     {model: models.TransactionsDetail, include:[
                         {model: models.Product}
                     ]}
             ]})
 
             return tr;
         }
    }
}

module.exports = { typeDefs, resolvers }