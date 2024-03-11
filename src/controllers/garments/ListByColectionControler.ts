import { Request,Response } from "express";
import {ListByColectionService} from '../../services/garments/ListByColectionsService';

class ListByColectionControler{
    async handle(req:Request,res:Response){
       const name = req.query.name as string;
       if(!name){
        throw new Error('Coleção não encontrada!');
       }
       else{
       const listByColection = new ListByColectionService();

       const products =  await listByColection.execute({
        name
       });
       return res.json(products);
        }
    }
}

export {ListByColectionControler};