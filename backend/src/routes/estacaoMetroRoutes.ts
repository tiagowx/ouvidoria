import { EstacaoMetroController } from "../controllers/EstacaoMetroController"

export const estacaoMetroRoutes = [{
    method: "get",
    route: "/estacao-metro",
    controller: EstacaoMetroController,
    action: "all"
}, {
    method: "get",
    route: "/estacao-metro/:id",
    controller: EstacaoMetroController,
    action: "one"
}, {
    method: "post",
    route: "/estacao-metro",
    controller: EstacaoMetroController,
    action: "save"
}, {
    method: "delete",
    route: "/estacao-metro/:id",
    controller: EstacaoMetroController,
    action: "remove"
}]