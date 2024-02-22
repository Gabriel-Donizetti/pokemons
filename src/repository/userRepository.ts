import { PrismaClient } from "@prisma/client";
import { z} from "zod"
import { userSchema } from "../interfaces/user";

type User = z.infer<typeof userSchema>

class UserRepository{
    prisma:PrismaClient;
    constructor(){
        this.prisma = new PrismaClient;
    }

    async createUser(user: User) {
        const trainer = await this.prisma.user.create({
            data:{
               trainer: user.name,
               type: user.type,
               level: 1
            },
        })
        return trainer;
    }

   
}

export default UserRepository;