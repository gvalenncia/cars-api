const Owner = {
    vehicles(parent, args, ctx, info) {
        return ctx.db.vehicles.filter((vehicle)=>{
            return vehicle.owner === parent.id
        })
    }
}

export { Owner as default }