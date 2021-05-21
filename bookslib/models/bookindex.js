import pgconfig from '../config/db.postgres.config.js'
import Sequelize from 'sequelize'
import tutorial from './tutorial.model.js'
console.log(pgconfig)

const sequelize = new Sequelize(pgconfig.DB, pgconfig.USER,pgconfig.PASSWORD,{
    HOST : pgconfig.HOST,
    Port : pgconfig.Port,
    dialect : pgconfig.dialect,
    opratorsAliaes : false ,
    pool : {
        max : pgconfig.pool.max,
        min : pgconfig.pool.min,
        acquire : pgconfig.pool.acquire,
        idle : pgconfig.pool.idle
    }
});

const db = {
    Sequelize : Sequelize,  //for schema
    sequelize : sequelize,   //for imported  define standard datatype from the seq module
    tutorials : tutorial(sequelize,Sequelize)
}

export default db