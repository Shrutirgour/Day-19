import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.USER_NAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.HOST,
    dialect: "postgres",
  }
);

const dbConnection = async (sequelize) => {
  try {
    await sequelize.authenticate()
    console.log('Successfully connected to database');
    await sequelize.sync();
    console.log('Database Syncing Successfull!');
}
  catch (error) {
    console.error('Unable to connect to database:', error);
  };
}

dbConnection(sequelize);