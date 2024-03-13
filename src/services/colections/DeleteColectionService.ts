import prismaClient from "../../prisma/prisma";


interface DeleteRequest{
    id:string;
}

class DeleteColectionService{
  async execute({id}:DeleteRequest){
    

    if(!id){
        throw new Error("ID da coleção não fornecido!");
    }

    const deleteColection = await prismaClient.colection.delete({
        where:{id:id}, 
         
    })
    return deleteColection;
  }
}
export {DeleteColectionService}