import VehicleModel from '.././models/vehicle.model'

const Owner = {
    vehicles(parent, args, ctx, info) {
        return VehicleModel.findAll({
            where: { owner: parent.id }
          })
        .then((resolves) =>{
            let vehicles = []
            resolves.forEach((resolve) => {
                vehicles.push(resolve.dataValues)
            })
            return vehicles
        })
    }
}

export { Owner as default }