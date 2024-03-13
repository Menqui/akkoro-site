import { Request,Response } from "express";
import { DeleteColectionService } from "../../services/colections/DeleteColectionService";

class DeleteColectionControler{
    async handle(req:Request,res:Response){
        const deleteColecition = new DeleteColectionService;

        const {id} = req.body;
        console.log(id)

        const del = await deleteColecition.execute({id});
        
        console.log(del)
        return res.json(del)
        
    }
}
export {DeleteColectionControler};