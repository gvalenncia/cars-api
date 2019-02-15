const Vehicle = {
    owner(parent, args, ctx, info){
        return ctx.db.owners.find((owner)=>{
            return owner.id === parent.owner
        })
    }
}

export { Vehicle as default }