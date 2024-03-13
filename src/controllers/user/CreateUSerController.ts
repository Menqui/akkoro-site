import { Request,Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";    

class CreateUserController{
   async handle(req:Request, res:Response){
       const {name , email, password,isAdmin} = req.body;
   
      
       const createUserService = new CreateUserService();
       const user = await createUserService.execute({
        name,
        email,
        password,
        isAdmin: isAdmin || false, // Definindo isAdmin como false se não for fornecido na requisição
       });

       return res.json(user)
   }
}

export {CreateUserController}