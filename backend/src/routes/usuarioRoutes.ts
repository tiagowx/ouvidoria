import { UsuarioController } from "../controllers/UsuarioController";

export const usuarioRoutes = [{
    method: "get",
    route: "/usuario",
    controller: UsuarioController,
    action: "all"
}, {
    method: "get",
    route: "/usuario/:id",
    controller: UsuarioController,
    action: "one"
}, {
    method: "post",
    route: "/usuario",
    controller: UsuarioController,
    action: "save"
}, {
    method: "delete",
    route: "/usuario/:id",
    controller: UsuarioController,
    action: "remove"
}];