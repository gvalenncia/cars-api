import Owner from './Owner'

test('It should get all vehicles of the owner with id 1', () => {
    //given
    const parent = {id: '1'}
    const args = {}
    const ctx = {
        db:{
            vehicles: [
                {id: '1', plate: 'AAA123', type: 'truck', owner: '1', brand: '1'},
                {id: '2', plate: 'AAA125', type: 'sedan', owner: '1', brand: '1'}
            ]
        }
    }
    const info = {}

    //when
    const outcome = Owner.vehicles(parent, args, ctx, info)
    
    //then
    expect(outcome).toEqual(ctx.db.vehicles)
});