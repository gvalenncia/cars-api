import Vehicle from './Vehicle'

test('It should get the owner of a vehicle with id 1', () => {
    //given
    const parent = {owner: '1'}
    const args = {}
    const ctx = {
        db:{
            owners: [
                {id: '1', name: 'german valencia'}
            ]
        }
    }
    const info = {}

    //when
    const outcome = Vehicle.owner(parent, args, ctx, info)
    
    //then
    expect(outcome).toEqual(ctx.db.owners[0])
});

test('It should get the brand of a vehicle with id 1', () => {
    //given
    const parent = {brand: '1'}
    const args = {}
    const ctx = {
        db:{
            brands: [
                {id: '1', name: 'ford'}
            ]
        }
    }
    const info = {}

    //when
    const outcome = Vehicle.brand(parent, args, ctx, info)
    
    //then
    expect(outcome).toEqual(ctx.db.brands[0])
});