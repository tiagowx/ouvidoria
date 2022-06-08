import { ManifestacaoController } from "../controllers/ManifestacaoController";

export const manifestacaoRoutes = [{
    method: "get",
    route: "/manifestacoes",
    controller: ManifestacaoController,
    action: "all"
}, {
    method: "get",
    route: "/manifestacoes/:id",
    controller: ManifestacaoController,
    action: "one"
}, {
    method: "post",
    route: "/manifestacoes",
    controller: ManifestacaoController,
    action: "save"
}, {
    method: "delete",
    route: "/manifestacoes/:id",
    controller: ManifestacaoController,
    action: "remove"
}]