import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Usuario } from "../entities/Usuario"
import Repository from "../repository";

export class UsuarioController {

    async all(req: Request, res: Response, next: NextFunction) {
        return Repository.getRepository(Usuario).find();
    }

    async one(req: Request, res: Response, next: NextFunction) {
        return Repository.getRepository(Usuario).findOneBy({ codigo: req.params.codigo });
    }

    async save(req: Request, res: Response, next: NextFunction) {

        const usuario = await Repository.getRepository(Usuario).create(req.body);
        return Repository.getRepository(Usuario).save(usuario);
    }

    async remove(req: Request, res: Response, next: NextFunction) {
        let userToRemove = await Repository.getRepository(Usuario).findOneBy({ codigo: req.params.codigo })
        await Repository.getRepository(Usuario).remove(userToRemove);
    }

}