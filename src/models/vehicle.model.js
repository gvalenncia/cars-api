import DbHelper from './db.helper'
import Sequelize from 'sequelize'
import OwnerModel from '../models/owner.model'
import BrandModel from '../models/brand.model'

const VehicleModel = DbHelper.define('vehicle_tb', {
    id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
    plate: { type: Sequelize.STRING, allowNull: false, unique: true },
    type: { type: Sequelize.STRING, allowNull: false },
    owner: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: {
            model: OwnerModel,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
          }

    },
    brand: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: {
            model: BrandModel,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
          }

    }
},{ 
    freezeTableName: true,
    timestamps: false
});

export { VehicleModel as default }