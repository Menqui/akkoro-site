import { Router,Request,Response } from "express";
import { CreateUserController } from './controllers/user/CreateUSerController';
import {AuthUserController} from './controllers/user/AuthUserController';

const router = Router();


// ------- ROTAS USER --------

/*router.get('/teste',( req: Request, res: Response)=>{
   return res.json({ok:true}) 
});
*/
router.post('/users',new CreateUserController().handle) //rota de cadastro

router.post('/session',new AuthUserController().handle)//rota de login
export {router};