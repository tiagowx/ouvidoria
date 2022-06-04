import "reflect-metadata"
import { DataSource } from "typeorm"
import entities from './entities'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 6033,
    username: "root",
    password: "my_secret_password",
    database: "ouvidoriaDb",
    synchronize: false,
    logging: false,
    entities: entities,
    migrations: [],
    subscribers: [],
})
