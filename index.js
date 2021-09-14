const { ApolloServer } = require("apollo-server");
const {
  importModels,
} = require('./models');
const typeDefsAndResolversMerger = require('./modules');
const { sequelizeInstance, Sequelize } = require('./config/db');

(async function () {
  try {
   
    const models = importModels(sequelizeInstance, Sequelize);
    
    const { typeDefs, resolvers } = typeDefsAndResolversMerger();
      
    const server = new ApolloServer({
      typeDefs: typeDefs,
      resolvers: resolvers,
      context: ({ req }) => ({
        models: { ...models }
      }),
      introspection: true,
      playground: true,
    });

    server.listen().then(({url}) => {
        console.log(`YOUR API IS RUNNING ON: ${url} `)
    })
  
  } catch (err) {
    console.log(err)
  }
})();




