import { Request, Response } from "express";
import { userSchema } from "../interfaces/user";
import { z} from "zod"
import UserService from "../service/userService";

const userService = new UserService();
type User = z.infer<typeof userSchema>

export class UserController {

    static async create(req: Request, res: Response){
        try {
            const {name, type} = req.body;

            const user: User ={
                name, type
            }
            const resService = await userService.create(user)
            return res.status(200).json({resService});
        } catch (error) {
            return res.status(502).json(error);
        }
    }
}