import {Request, Response} from 'express';
import {AuthUserService} from '../../services/user/AuthUserSerivce'

class AuthUserController{
    async handle(req:Request , res:Response){
        const {email,password} = req.body;
        const authUserSerivce = new AuthUserService();

        const auth = await authUserSerivce.execute({  //verifica o email e a senha e depois o retorna
            email,
            password
        })
        return res.json(auth);
    }
}

export {AuthUserController }