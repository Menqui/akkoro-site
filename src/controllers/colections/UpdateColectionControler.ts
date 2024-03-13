import { Request, Response } from "express";
import { UpdateColectionService } from "../../services/colections/UpdateColectionService";

class UpdateColectionControler {
    async handle(req:Request,res:Response){
        const updateColection = new UpdateColectionService();
        const { id, name, description } = req.body; // Assumindo que o ID é fornecido no corpo da solicitação

        const update = await updateColection.execute({
            id,
            name,
            description
        });
        return res.json(update);
    }
}
export {UpdateColectionControler};