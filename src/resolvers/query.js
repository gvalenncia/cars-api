import OwnerModel from '../models/owner.model'
import VehicleModel from '../models/vehicle.model'

const Query = {
    vehicles(parent, args, ctx, info) {
        return VehicleModel.findAll()
        .then(resolves => {
            let vehicles = []
            resolves.forEach((resolve) => {
                vehicles.push(resolve.dataValues)
            })
            return vehicles
        })
    },
    owners(parent, args, ctx, owner) {
        return OwnerModel.findAll()
        .then(resolves => {
            let owners = []
            console.log(resolves)
            console.log('----------------------------------------------')
            resolves.forEach((resolve) => {
                owners.push(resolve.dataValues)
            })
            return owners
        })
    }
}

export { Query as default }