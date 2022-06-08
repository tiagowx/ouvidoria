import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { EstacaoMetro } from "../entities/EstacaoMetro"
import Repository from "../repository";

export class EstacaoMetroController {

    async all(req: Request, res: Response, next: NextFunction) {
        return Repository.getRepository(EstacaoMetro).find();
    }

    async one(req: Request, res: Response, next: NextFunction) {
        return Repository.getRepository(EstacaoMetro).findOneBy({ codigo: req.params.codigo });
    }

    async save(req: Request, res: Response, next: NextFunction) {

        const estacaoMetro = await Repository.getRepository(EstacaoMetro).create(req.body);
        return Repository.getRepository(EstacaoMetro).save(estacaoMetro);
    }

    async remove(req: Request, res: Response, next: NextFunction) {
        let estacaoMetroToRemove = await Repository.getRepository(EstacaoMetro).findOneBy({ codigo: req.params.codigo })
        await Repository.getRepository(EstacaoMetro).remove(estacaoMetroToRemove);
    }

}