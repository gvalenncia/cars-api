import OwnerModel from '.././models/owner.model'
import BrandModel from '.././models/brand.model'

const Vehicle = {
    owner(parent, args, ctx, info){
        return OwnerModel.findByPk(parent.owner)
        .then((resolve) =>{
            return resolve.dataValues
        })
    },
    brand(parent, args, ctx, info){
        return BrandModel.findByPk(parent.brand)
        .then((resolve) =>{
            return resolve.dataValues
        })
    }
}

export { Vehicle as default }