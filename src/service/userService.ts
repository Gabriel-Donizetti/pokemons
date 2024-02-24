import { json } from "stream/consumers";
import { userDTO } from "../interfaces/user";
import UserRepository from "../repository/userRepository";

export default class UserService{
    userRepository:UserRepository;
    constructor(){
        this.userRepository = new UserRepository();
    }

    /**
    * @param userDTO
    * @returns
    */
    async create(User:userDTO){
        const trainer = await this.userRepository.create(User);
        if(!trainer){
            throw new Error ('Error on create trainer')
        }
        return trainer;        
    }

    
     async update(name: string, id: number){
        const find = await this.userRepository.findTrainer(id);
        if(!find){
            throw new Error('Trainer not find')
        }
        const trainer = await this.userRepository.update(name, id);
        return 'Trainer updated';        
    }

    async delete(id: number){
        const find = await this.userRepository.findTrainer(id)
        if(!find){
            throw new Error('Trainer not find')
        }

        const trainer = await this.userRepository.delete(id)
        return trainer
    }

    async getTrainer(id: number){
        const trainer = await this.userRepository.findTrainer(id)
        if(!trainer){
            throw new Error('Trainer not find')
        }

        return trainer
        
    }

    async getAllTrainers(){
        const trainers = await this.userRepository.findAllTrainers()

        return trainers;
    }

    async battle(id1: number, id2: number){
        const trainer1 = await this.userRepository.findTrainer(id1);
        if (!trainer1) {
            throw new Error('Trainer 1 not found');
        }
        const level1 = trainer1.level;
    
        const trainer2 = await this.userRepository.findTrainer(id2);
        if (!trainer2) {
            throw new Error('Trainer 2 not found');
        }
        const level2 = trainer2.level;
    
        const percent1 = level1 / (level1 + level2);
        const percent2 = level2 / (level1 + level2);
    
        const winner = Math.random() < percent1 ? trainer1 : trainer2;
    
        if (winner === trainer1) {
            const newLevel = level1 + 1;
            const updatedWinner = await this.userRepository.updateLevel(id1, newLevel);
    
            if (level2 > 1) {
                const newLevel = level2 - 1;
                await this.userRepository.updateLevel(id2, newLevel);
            } else {
                await this.userRepository.delete(id2);
            }
    
            return updatedWinner;
        } else {
            const newLevel = level2 + 1;
            const updatedWinner = await this.userRepository.updateLevel(id2, newLevel);
    
            if (level1 > 1) {
                const newLevel = level1 - 1;
                await this.userRepository.updateLevel(id1, newLevel);
            } else {
                await this.userRepository.delete(id1);
            }
    
            return updatedWinner;
        }
    }

}