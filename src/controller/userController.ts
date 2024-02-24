import { Request, Response } from "express";
import { userDTO } from "../interfaces/user";
import UserService from "../service/userService";

const userService = new UserService();

export class UserController {

    static async create(req: Request, res: Response){
        try {
            const {name, type} = req.body;

            const user: userDTO ={
                name, type
            }
            const resService = await userService.create(user)
            return res.status(200).json({resService});
        } catch (error: any) {
            return res.status(502).json({message:error.message});
        }
    }

    static async update(req: Request, res: Response){
        try {
            const {name} = req.body;
            const id = parseInt(req.params.id);

            const resService = await userService.update(name, id)
            return res.status(204).json({message:resService});
        } catch (error:any) {
            return res.status(502).json({message:error.message});
        }
    }

    static async delete(req: Request, res: Response){
        try {
            const id = parseInt(req.params.id);

            const resService = await userService.delete(id)

            return res.status(204).json({message:resService})
        } catch (error: any) {
            return res.status(502).json({message:error.message});
        }
    }
    static async getTrainer(req: Request, res: Response){
        try {
            const id = parseInt(req.params.id);

            const resService = await userService.getTrainer(id)
            return res.status(200).json({message:resService})
        } catch (error: any) {
            return res.status(502).json({message:error.message});
        }
    }
    static async getAllTrainers(req: Request, res: Response){
        try {
            const resService = await userService.getAllTrainers()

            return res.status(200).json({message:resService})
        } catch (error: any) {
            return res.status(502).json({message:error.message});
        }
    }

    
    static async battle(req: Request, res: Response){
        try {
            const id1 = parseInt(req.params.id1)
            const id2 = parseInt(req.params.id2)

            const resService = await userService.battle(id1, id2)

            return res.status(200).json(resService)
        } catch (error) {
            return res.status(502).json(error);
        }
    }
}