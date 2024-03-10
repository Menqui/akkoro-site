import { Request, Response } from "express";
import { CreateGarmentsService } from "../../services/garments/CreateGarmentsService";

class CreateGarmetControler{
    async handle(req:Request , res:Response){
        const {name,description,price} = req.body;
        let banner ='';
        const createGarmetService = new CreateGarmentsService();

        const creatGarmet = await createGarmetService.execute({
            name,
            price,
            description,
            banner,
        })
    }
}