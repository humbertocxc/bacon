import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Photo } from "./entity/Photo"
import { Card } from "./entity/Card"
import { Category } from "./entity/Category"


export const AppDataSource = new DataSource({
  type: "postgres",
  // url: process.env.DATABASE_URL,
  password: '1497794191',
  username: 'humberto',
  database: 'passaredo',
  port: 5432,
  synchronize: true,
  logging: false,
  entities: [User, Photo, Card, Category],
  migrations: ["migrations/*.js"],
  subscribers: [],
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  },
})