import { Router } from "express";
import { UserController } from "../controller/userController";

const routes : Router = Router();

//cria um trainador
routes.post('/pokemons', UserController.create)
//atualiza nome do treinador
routes.put('/pokemons/:id', UserController.update)
//deleta treinador
routes.delete('/pokemons/:id', UserController.delete)
//retorna 1 trainador
routes.get('/pokemons/:id', UserController.getTrainer)
//retorna todos os treinadores
routes.get('/pokemons', UserController.getAllTrainers)
//batalha entra 2 pokemons
routes.post('/batalha/:id1/:id2', UserController.battle)

export default routes;