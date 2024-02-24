import { PrismaClient } from "@prisma/client";
import { userDTO } from "../interfaces/user";


class UserRepository{
    prisma:PrismaClient;
    constructor(){
        this.prisma = new PrismaClient;
    }

    async findTrainer(id: number){
        const trainer = await this.prisma.user.findUniqueOrThrow({
            where:{
                id: id
            },
        })

        console.log(trainer)

        return trainer
    }

    async findAllTrainers(){
        const trainers = await this.prisma.user.findMany({
           orderBy:{
            id:'asc'
           }
        })
        
        return trainers
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

    async delete(id: number){
        const trainer = await this.prisma.user.delete({
            where:{
                id: id
            },
        })

        return trainer
    }

    async updateLevel(id: number, level: number){
        const trainer = await this.prisma.user.update({
            where: {
                id: id
            },
            data:{
                level: level
            }
        })

        return trainer
    }
   
}

export default UserRepository;