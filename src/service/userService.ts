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
        return trainer;        
    }

}