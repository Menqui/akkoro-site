import { Request, Response } from "express";
import { CreateGarmentsService } from "../../services/garments/CreateGarmentsService";

interface MulterRequest extends Request {
    file: any; // Define a propriedade 'file'
}


class CreateGarmetControler {
    async handle(req: MulterRequest, res: Response) {
        

        const { name, description, price, banner, colection_id } = req.body;
        const createGarmetService = new CreateGarmentsService();
        
       
        if(!req.file){
            console.log(req.file)
            throw new Error("Erro ao enviar foto/Video!");
        }
        else{
            const {filename:banner} = req.file;

            const createGarmet = await createGarmetService.execute({
                name,
                description,
                price,
                banner,
                colection_id
            });
    
            
            return res.json(createGarmet);
        }

        
    }
}

export {CreateGarmetControler};