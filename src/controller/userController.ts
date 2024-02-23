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
        } catch (error) {
            return res.status(502).json(error);
        }
    }

    static async update(req: Request, res: Response){
        try {
            const {name} = req.body;
            const id = parseInt(req.params.id);

            const resService = await userService.update(name, id)
            return res.status(200).json({resService});
        } catch (error) {
            return res.status(502).json(error);
        }
    }
}