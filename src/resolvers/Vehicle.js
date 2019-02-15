const Vehicle = {
    owner(parent, args, ctx, info){
        return ctx.db.owners.find((owner)=>{
            return owner.id === parent.owner
        })
    },
    brand(parent, args, ctx, info){
        return ctx.db.brands.find((brand)=>{
            return brand.id === parent.brand
        })
    }
}

export { Vehicle as default }