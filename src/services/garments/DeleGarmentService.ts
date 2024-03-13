import prismaClient from "../../prisma/prisma";

interface DeleteRequest{
    id:string;
}

class DeleteGarmentService {
   async execute({id}:DeleteRequest){
        if(!id){
            throw new Error("ID da peça não fornecido!");
        }

        const deleteGarment = prismaClient.garment.delete({
            where:{id:id}
            
        })
        return deleteGarment;
   }
}
export {DeleteGarmentService}