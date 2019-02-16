import Sequelize from 'sequelize'

const DbHelper = new Sequelize('cars_db', 'gvv', 'gvv', {
    dialect: 'postgres',
    host: "localhost",
    port: 5432,
    logging: false
})

export { DbHelper as default }