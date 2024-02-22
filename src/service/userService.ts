import { userSchema } from "../interfaces/user";
import { z} from "zod"
import UserRepository from "../repository/userRepository";

type User = z.infer<typeof userSchema>

export default class UserService{
    userRepository:UserRepository;
    constructor(){
        this.userRepository = new UserRepository();
    }

    /**
    * @param User
    * @returns
    */
    async create(User:User){
        const trainer = await this.userRepository.createUser(User);
        if(!trainer){
            throw new Error ('Error on create trainer')
        }
        return trainer;        
    }

}