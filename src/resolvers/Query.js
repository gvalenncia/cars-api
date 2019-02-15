const Query = {
    vehicles(parent, args, ctx, info) {
        return ctx.db.vehicles
    },
    owners(parent, args, ctx, owner){
        return ctx.db.owners
    }
}

export { Query as default }