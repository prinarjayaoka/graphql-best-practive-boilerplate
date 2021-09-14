const typeDefs = `
    input inputUser {
        id: ID!
        username: String!
        firstName: String!
        lastName: String!
        password: String!
    }

    type Mutation {
        createUser(input: inputUser!): User
    }
                    `

const resolvers = {
    Mutation: {
        createUser: async(parents, args, context) => {
            const { models } = context;
            
            const user = {
                username: args.input.username,
                firstName: args.input.firstName,
                lastName: args.input.lastName,
                password: bcrypt.hashSync(args.input.password, 8),
                createdAt: new Date(),
                updatedAt: new Date()
            }

            await models.User.create(user);

            

            return user;
            
        },
    }
}

module.exports = { typeDefs, resolvers }