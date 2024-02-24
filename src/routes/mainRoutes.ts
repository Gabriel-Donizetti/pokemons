import { Router } from "express";
import { UserController } from "../controller/userController";

const routes : Router = Router();

/**
 * @swagger
 * definitions:
 *   UserDTO:
 *     type: object
 *     properties:
 *       name:
 *         type: string
 *       type:
 *         type: string
 */

/**
 * @swagger
 * /pokemons:
 *   post:
 *     summary: Cria um novo usuário.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/UserDTO'
 *     responses:
 *       '200':
 *         description: Usuário criado com sucesso.
 *       '502':
 *         description: Erro ao criar usuário.
 */
routes.post('/pokemons', UserController.create)

/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Atualiza um usuário existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser atualizado.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/UserDTO'
 *     responses:
 *       '204':
 *         description: Usuário atualizado com sucesso.
 *       '502':
 *         description: Erro ao atualizar usuário.
 */
routes.put('/pokemons/:id', UserController.update)

/**
 * @swagger
 * /pokemons/{id}:
 *   delete:
 *     summary: Deleta um usuário existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser deletado.
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Usuário deletado com sucesso.
 *       '502':
 *         description: Erro ao deletar usuário.
 */
routes.delete('/pokemons/:id', UserController.delete)

/**
 * @swagger
 * /pokemons/{id}:
 *   get:
 *     summary: Retorna informações de um treinador pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do treinador.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Informações do treinador retornadas com sucesso.
 *       '502':
 *         description: Erro ao buscar informações do treinador.
 */
routes.get('/pokemons/:id', UserController.getTrainer)

/**
 * @swagger
 * /pokemons:
 *   get:
 *     summary: Retorna informações de todos os treinadores.
 *     responses:
 *       '200':
 *         description: Informações de todos os treinadores retornadas com sucesso.
 *       '502':
 *         description: Erro ao buscar informações dos treinadores.
 */
routes.get('/pokemons', UserController.getAllTrainers)

/**
 * @swagger
 * /batalha/{id1}/{id2}:
 *   post:
 *     summary: Efetua uma batalha entre dois pokémons.
 *     parameters:
 *       - in: path
 *         name: id1
 *         required: true
 *         description: ID do primeiro pokémon.
 *         schema:
 *           type: integer
 *       - in: path
 *         name: id2
 *         required: true
 *         description: ID do segundo pokémon.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Batalha efetuada com sucesso.
 *       '404':
 *         description: Pokémon não encontrado.
 *       '502':
 *         description: Erro ao efetuar a batalha.
 */
routes.post('/batalha/:id1/:id2', UserController.battle)

export default routes;