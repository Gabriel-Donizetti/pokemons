import { Router } from "express";
import { UserController } from "../controller/userController";

const routes : Router = Router();

routes.post('/pokemons',UserController.create)

export default routes;