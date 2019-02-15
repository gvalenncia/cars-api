// Owner mock data
const owners = [
    {id: '1', name: 'german valencia' },
    {id: '2', name: 'andrew liles'},
    {id: '3', name: 'steve jobs'}
]

// Vehicle mock data
const vehicles = [
    {id: '10', brand: 'ford', type: 'truck', plate: 'AAA123', owner: '1'},
    {id: '20', brand: 'hyundai', type: 'sedan', plate: 'AAA125', owner: '1'},
    {id: '30', brand: 'chevrolet', type: 'sedan', plate: 'AAA126', owner: '2'},
    {id: '40', brand: 'chevrolet', type: 'sedan', plate: 'BBB126', owner: '3'}
]

const db = {
    owners,
    vehicles
}

export { db as default }