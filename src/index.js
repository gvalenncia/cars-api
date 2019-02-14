import { GraphQLServer } from 'graphql-yoga'

// User mock data
const owners = [
    {id: '1', name: 'german valencia' },
    {id: '2', name: 'andrew liles'},
    {id: '3', name: 'steve jobs'}
]

// Post mock data
const vehicles = [
    {id: '10', brand: 'ford', type: 'truck', plate: 'AAA123', owner: '1'},
    {id: '20', brand: 'hyundai', type: 'sedan', plate: 'AAA125', owner: '1'},
    {id: '30', brand: 'chevrolet', type: 'sedan', plate: 'AAA126', owner: '2'},
    {id: '40', brand: 'chevrolet', type: 'sedan', plate: 'BBB126', owner: '3'}
]

const typeDefs = `
    type Query {
        vehicles: [Vehicle!]!
        owners: [Owner!]!
    }

    type Vehicle {
        id: ID!
        brand: String!
        type: String!
        plate: String!
        owner: Owner!
    }

    type Owner {
        id: ID!
        name: String!
        vehicles: [Vehicle!]!
    }
`
const  resolvers = {
    Query: {
        vehicles() {
            return vehicles
        },
        owners(){
            return owners
        }
    },
    Vehicle: {
        owner(parent, args, ctx, info){
            return owners.find((owner)=>{
                return owner.id === parent.owner
            })
        }
    },
    Owner: {
        vehicles(parent, args, ctx, info) {
            return vehicles.filter((vehicle)=>{
                return vehicle.owner === parent.id
            })
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log('up and running!')
})