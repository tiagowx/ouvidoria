import process = require("process");
import "reflect-metadata"
import { DataSource } from "typeorm"
import entities from './entities'

require ('dotenv').config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: 6033,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false,
    logging: false,
    entities: entities,
    migrations: [],
    subscribers: [],
})
