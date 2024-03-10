import { Request,Response} from 'express';
import { CreateColectionService } from '../../services/colections/CreateColectionService';

class CreateColectionController{
    async handle(req:Request, res:Response){
        const createColectionService = new CreateColectionService();
        const {name,description} = req.body;
        

        const colection = await createColectionService.execute({
          name,
          description,
        });
        return res.json(colection);
    }
}

export {CreateColectionController};