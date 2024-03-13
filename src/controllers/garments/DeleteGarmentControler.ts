import { Request , Response } from "express";
import { DeleteGarmentService } from "../../services/garments/DeleGarmentService";

class DeleteGarmentControler{
 async handle(req:Request,res:Response){
    const {id} = req.body;

     const delAux = new DeleteGarmentService;
     const del = await delAux.execute({id});

     console.log(del)
     return res.status(200).json("Peça deletada com sucesso!");
 }
}

export {DeleteGarmentControler};