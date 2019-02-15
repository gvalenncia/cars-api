import { GraphQLServer } from 'graphql-yoga'
import Query from './resolvers/Query'
import Vehicle from './resolvers/Vehicle'
import Owner from './resolvers/Owner'
import db from './db'

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        Vehicle,
        Owner
    },
    context: {
        db
    }
})

server.start(() => {
    console.log('up and running!')
})