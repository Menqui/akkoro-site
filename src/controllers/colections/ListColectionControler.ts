import { Request, Response } from "express"; 
import { ListColectionService } from "../../services/colections/ListColectionService";

class ListColectionControler{
    async handle(req:Request,res:Response){
        const listColection = new ListColectionService();

        const list = await listColection.execute();

        return res.json(list);
    }
}
export {ListColectionControler}