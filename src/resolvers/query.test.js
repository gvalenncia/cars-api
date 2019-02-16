import Query from './query'
import OwnerModel from '.././models/owner.model'
import VehicleModel from '.././models/vehicle.model'

jest.mock('.././models/owner.model')
jest.mock('.././models/vehicle.model')

test('It should get all vehicles', () => {
    //given
    const expected = [
        { id: 1, plate: 'AAA123', type: 'truck', owner: 1, brand: 1 },
        { id: 2, plate: 'BBB456', type: 'sedan', owner: 1, brand: 1 },
        { id: 3, plate: 'CCC789', type: 'sedan', owner: 2, brand: 2 },
        { id: 4, plate: 'DDD012', type: 'sedan', owner: 3, brand: 2 },
    ]
    VehicleModel.findAll.mockResolvedValue([ 
        { dataValues: { id: 1, plate: 'AAA123', type: 'truck', owner: 1, brand: 1 } },
        { dataValues: { id: 2, plate: 'BBB456', type: 'sedan', owner: 1, brand: 1 } },
        { dataValues: { id: 3, plate: 'CCC789', type: 'sedan', owner: 2, brand: 2 } },
        { dataValues: { id: 4, plate: 'DDD012', type: 'sedan', owner: 3, brand: 2 } }
    ])

    //when, then
    return Query.vehicles({}, {}, {}, {})
    .then((outcome)=>{
        expect(outcome).toEqual(expected)
    })
});

test('It should get all owners', () => {
    //given
    const expected = [
        { id: 1, cedula: '80754212', name: 'german valencia' },
        { id: 2, cedula: '78654390', name: 'andrew lilles' },
        { id: 3, cedula: '34567845', name: 'steve jobs' } 
    ]
    OwnerModel.findAll.mockResolvedValue([
        { dataValues: { id: 1, cedula: '80754212', name: 'german valencia' } },
        { dataValues: { id: 2, cedula: '78654390', name: 'andrew lilles' } },
        { dataValues: { id: 3, cedula: '34567845', name: 'steve jobs' } } 
   ])

    //when, then
    return Query.owners({}, {}, {}, {})
    .then((outcome)=>{
        expect(outcome).toEqual(expected)
    })
});