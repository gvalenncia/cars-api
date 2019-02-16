import Owner from './owner'
import VehicleModel from '.././models/vehicle.model'

jest.mock('.././models/vehicle.model')

test('It should get all vehicles of the owner with id 1', () => {
    //given
    const parent = {id: '1'}
    const expected = [
        {id: 1, plate: 'AAA123', type: 'truck', owner: 1, brand: 1},
        {id: 2, plate: 'BBB456', type: 'sedan', owner: 1, brand: 1}
    ]
    VehicleModel.findAll.mockResolvedValue([
        { dataValues: { id: 1, plate: 'AAA123', type: 'truck', owner: 1, brand: 1 } },
        { dataValues: { id: 2, plate: 'BBB456', type: 'sedan', owner: 1, brand: 1 } }
    ])

    //when, then
    return Owner.vehicles(parent, {}, {}, {})
    .then((outcome)=>{
        expect(outcome).toEqual(expected)
    })
});