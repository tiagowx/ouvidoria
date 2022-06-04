import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Usuario } from "../entities/Usuario"
import Repository from "../repository";

export class UsuarioController {

    async all(req: Request, res: Response, next: NextFunction) {
        return Repository(Usuario).find();
    }

    async one(req: Request, res: Response, next: NextFunction) {
        return Repository(Usuario).findOneBy({ codigo: req.params.id });
    }

    async save(req: Request, res: Response, next: NextFunction) {

        const user = await Repository(Usuario).create(req.body);
        return Repository(Usuario).save(user);
    }

    async remove(req: Request, res: Response, next: NextFunction) {
        let userToRemove = await Repository(Usuario).findOneBy({ codigo: req.params.id })
        await Repository(Usuario).remove(userToRemove);
    }

}