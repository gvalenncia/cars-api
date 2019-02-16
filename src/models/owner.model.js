import DbHelper from './db.helper'
import Sequelize from 'sequelize'

const OwnerModel = DbHelper.define('owner_tb', {
    id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
    cedula: { type: Sequelize.STRING, allowNull: false, unique: true },
    name: { type: Sequelize.STRING, allowNull: false }
},{ 
    freezeTableName: true,
    timestamps: false
}
);

export { OwnerModel as default }