// Owner mock data
const owners = [
    {id: '1', name: 'german valencia' },
    {id: '2', name: 'andrew liles'},
    {id: '3', name: 'steve jobs'}
]

// Vehicle mock data
const vehicles = [
    {id: '1', plate: 'AAA123', type: 'truck', owner: '1', brand: '1'},
    {id: '2', plate: 'AAA125', type: 'sedan', owner: '1', brand: '1'},
    {id: '3', plate: 'AAA126', type: 'sedan', owner: '2', brand: '2'},
    {id: '4', plate: 'BBB126', type: 'sedan', owner: '3', brand: '2'}
]

//Brand mock data
const brands = [
    {id: '1', name: 'ford'},
    {id: '2', name: 'chevrolet'}
]

const db = {
    owners,
    vehicles,
    brands
}

export { db as default }