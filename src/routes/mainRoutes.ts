import { Router } from "express";
import { UserController } from "../controller/userController";

const routes : Router = Router();

routes.post('/pokemons', UserController.create)
routes.put('/pokemons/:id', UserController.update)
routes.delete('/pokemons/:id', UserController.delete)
routes.get('/pokemons/:id', UserController.getTrainer)
routes.get('/pokemons', UserController.getAllTrainers)

export default routes;