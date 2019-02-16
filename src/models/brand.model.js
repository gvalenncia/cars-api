import DbHelper from './db.helper'
import Sequelize from 'sequelize'

const BrandModel = DbHelper.define('brand_tb', {
    id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false }
},{ 
    freezeTableName: true,
    timestamps: false
}
);

export { BrandModel as default }