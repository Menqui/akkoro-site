import { Request,Response } from "express";
import { DeleteColectionService } from "../../services/colections/DeleteColectionService";

class DeleteColectionControler{
    async handle(req:Request,res:Response){
        const deleteColecition = new DeleteColectionService;

        const {id} = req.body;
       

        const del = await deleteColecition.execute({id});
        
        console.log(del)
        return res.status(200).json("Coleção deletada com sucesso!");
        
    }
}
export {DeleteColectionControler};