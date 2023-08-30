import { DataTypes, Model, Sequelize } from "sequelize";
const sequelize = new Sequelize('mariadb::memory:');

export class User extends Model {

}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    token: {
        type: DataTypes.STRING
    },
    isAdmin: {
        type: DataTypes.BOOLEAN
    },
}, { sequelize });