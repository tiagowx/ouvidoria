import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Manifestacao } from "../entities/Manifestacao"
import Repository from "../repository";

export class ManifestacaoController {

    async all(req: Request, res: Response, next: NextFunction) {
        return Repository.getRepository(Manifestacao).find();
    }

    async one(req: Request, res: Response, next: NextFunction) {
        return Repository.getRepository(Manifestacao).findOneBy({ codigo: req.params.codigo });
    }

    async save(req: Request, res: Response, next: NextFunction) {

        const user = await Repository.getRepository(Manifestacao).create(req.body);
        return Repository.getRepository(Manifestacao).save(user);
    }

    async remove(req: Request, res: Response, next: NextFunction) {
        let manifestacaoToRemove = await Repository.getRepository(Manifestacao).findOneBy({ codigo: req.params.codigo })
        await Repository.getRepository(Manifestacao).remove(manifestacaoToRemove);
    }

}