import { Sequelize } from 'sequelize';

export const dbConnect = async () => {
    const sequelize = new Sequelize('foodmine', 'root', '', {
        host: 'localhost',
        dialect: 'mariadb'
    });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}