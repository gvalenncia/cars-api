import { GraphQLServer } from 'graphql-yoga'
import Query from './resolvers/query'
import Vehicle from './resolvers/vehicle'
import Owner from './resolvers/owner'

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        Vehicle,
        Owner
    }
})

server.start(() => {
    console.log('up and running!')
})