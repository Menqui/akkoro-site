import { Router,Request,Response } from "express";
import multer from "multer";
import { CreateUserController } from './controllers/user/CreateUSerController';
import {AuthUserController} from './controllers/user/AuthUserController';
import { DetailUserController } from "./controllers/user/DetailUserControler";
import  {isAuthenticated} from './middlewares/isAuthenticated';
import {isAuthenticatedUser} from './middlewares/isAuthenticatedUser';
import { CreateColectionController} from './controllers/colections/CreateColectionController';
import { ListColectionControler } from './controllers/colections/ListColectionControler';
import { CreateGarmetControler } from "./controllers/garments/CreateGarmetsControler"; 
import {ListByColectionControler} from "./controllers/garments/ListByColectionControler";
import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));


// ------- ROTAS USER --------

/*router.get('/teste',( req: Request, res: Response)=>{
   return res.json({ok:true}) 
});
*/
router.post('/users',new CreateUserController().handle) //rota de cadastro

router.post('/session',new AuthUserController().handle)//rota de login

router.get('/userinfo',isAuthenticatedUser,new DetailUserController().handle)//rota de pegar infos do user


// ------- ROTAS COLECTIONS --------
router.post('/colection',isAuthenticated,new CreateColectionController().handle) //cadastrar coleção

router.get('/colection',isAuthenticated,new ListColectionControler().handle);//listar as coleções

// ------- ROTAS GARMENTS --------
router.post('/garment',isAuthenticated,upload.single('file'),new CreateGarmetControler().handle);//Cadastrar as peças de roupa

router.get('/colection/garment',isAuthenticated,new ListByColectionControler().handle)//Lista os produtos pela coleção 
 
export {router};