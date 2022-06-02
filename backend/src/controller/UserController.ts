import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { User } from "../entities/User"

export class UserController {

    async all(request: Request, response: Response, next: NextFunction) {
        return AppDataSource.getRepository(User).find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return AppDataSource.getRepository(User).findOneBy({id: request.params.id})
    }

    async save(request: Request, response: Response, next: NextFunction) {

        const user = await AppDataSource.getRepository(User).create(request.body)
        return AppDataSource.getRepository(User).save(user)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await  AppDataSource.getRepository(User).findOneBy( {id: request.params.id} )
        await AppDataSource.getRepository(User).remove(userToRemove)
    }

}