import Vehicle from './vehicle'
import OwnerModel from '.././models/owner.model'
import BrandModel from '.././models/brand.model'

jest.mock('.././models/owner.model')
jest.mock('.././models/brand.model')

test('It should get the owner of the vehicle with id 1', () => {
    //given
    const parent = {id: '1'}
    const expected = { id: 1, cedula: '80754212', name: 'german valencia' }
    OwnerModel.findByPk.mockResolvedValue(
        { dataValues: { id: 1, cedula: '80754212', name: 'german valencia' } }
    )

    //when, then
    return Vehicle.owner(parent, {}, {}, {})
    .then((outcome)=>{
        expect(outcome).toEqual(expected)
    })
});

test('It should get the brand of the vehicle with id 1', () => {
    //given
    const parent = {id: '1'}
    const expected = { id: 1, name: 'ford' }
    BrandModel.findByPk.mockResolvedValue({ dataValues: { id: 1, name: 'ford' } })

    //when, then
    return Vehicle.brand(parent, {}, {}, {})
    .then((outcome)=>{
        expect(outcome).toEqual(expected)
    })
});