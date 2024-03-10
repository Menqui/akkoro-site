import { Router,Request,Response } from "express";
import { CreateUserController } from './controllers/user/CreateUSerController';
import {AuthUserController} from './controllers/user/AuthUserController';
import { DetailUserController } from "./controllers/user/DetailUserControler";
import  {isAuthenticated} from './middlewares/isAuthenticated';

const router = Router();


// ------- ROTAS USER --------

/*router.get('/teste',( req: Request, res: Response)=>{
   return res.json({ok:true}) 
});
*/
router.post('/users',new CreateUserController().handle) //rota de cadastro

router.post('/session',new AuthUserController().handle)//rota de login

router.get('/userinfo',isAuthenticated,new DetailUserController().handle)//rota de pegar infos do user


export {router};