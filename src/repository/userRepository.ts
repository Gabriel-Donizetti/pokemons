import { PrismaClient } from "@prisma/client";
import { userDTO } from "../interfaces/user";


class UserRepository{
    prisma:PrismaClient;
    constructor(){
        this.prisma = new PrismaClient;
    }

    async findTrainer(id: number){
        const trainer = await this.prisma.user.findUnique({
            where:{
                id: id
            },
        })

        return trainer
    }

    async create(user: userDTO) {
        const trainer = await this.prisma.user.create({
            data:{
               trainer: user.name,
               type: user.type,
               level: 1
            },
        })
        return trainer;
    }

    async update(name: string, id: number){
        const trainer = await this.prisma.user.update({
            where:{
                id: id
            },
            data:{
                trainer: name
            }
        })

        return trainer
    }
   
}

export default UserRepository;