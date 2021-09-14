const typeDefs = `
    type Query {
        users: [User!]!
    }
`

const resolvers = {}

module.exports = { typeDefs, resolvers }