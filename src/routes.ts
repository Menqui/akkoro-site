import { Router} from "express";
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
import { UpdateColectionControler } from "./controllers/colections/UpdateColectionControler";
import { DeleteColectionControler } from "./controllers/colections/DeleteColectionControler";
import { DeleteGarmentControler } from "./controllers/garments/DeleteGarmentControler";
import { UpdateGarmentControler } from "./controllers/garments/UpdateGarmentControler";
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

router.put('/colection/name',isAuthenticated,new UpdateColectionControler().handle)//atualizar as coleções

router.delete('/colection/name',isAuthenticated,new DeleteColectionControler().handle)//Deleta as coleções

// ------- ROTAS GARMENTS --------
router.post('/garment',isAuthenticated,upload.single('file'),new CreateGarmetControler().handle);//Cadastrar as peças de roupa

router.get('/colection/garment',isAuthenticated,new ListByColectionControler().handle)//Lista os produtos pela coleção 
 
router.delete('/colection/garment/name',isAuthenticated, new DeleteGarmentControler().handle)//Deleta uma peça específica

router.put('/garment/name',isAuthenticated,upload.single('file'),new UpdateGarmentControler().handle)//Atualiza a peça

export {router};