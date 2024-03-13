import { Request,Response } from "express";
import { UpdateGarmentService } from "../../services/garments/UpdateGarmentService";

interface MulterRequest extends Request {
    file: any; // Define a propriedade 'file'
}


class UpdateGarmentControler{
    async handle(req:MulterRequest,res:Response){
        const { id, name, description, price } = req.body;
        const updateGarmentService = new UpdateGarmentService();

        try {
            console.log(name)
            // Verifica se todos os campos obrigatórios estão presentes
            if (!name || !description || !price || !id) {
                throw new Error('Preencha todos os campos obrigatórios!');
            }

            // Verifica se um arquivo foi enviado
            if (!req.file) {
                throw new Error("Erro ao enviar foto/Video!");
            }

            // Executa o serviço 
            const {filename:banner} = req.file;
            const updateGarment = await updateGarmentService.execute({
                id,
                name,
                description,
                price,
                banner
            });
         console.log(updateGarment);
         return res.json(updateGarment);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export { UpdateGarmentControler };