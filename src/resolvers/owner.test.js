import Owner from './Owner'

test('', () => {
    const outcome = Owner.vehicles({}, {}, {db:{vehicles: []}}, {})
    console.log(`hello world, ${outcome}`)
});