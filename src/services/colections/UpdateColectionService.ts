import prismaClient from "../../prisma/prisma";

interface UpdateRequest{
  id:string;
  name?:string;
  description?:string
}

class UpdateColectionService{
    async execute({id,name,description}:UpdateRequest){
      const update = prismaClient.colection.update({
        where: { id: id }, // Especifique aqui como identificar a coleção a ser atualizada
        data: {
            name: name,
            description: description,
        }
      });
      return update;

    }
}

export {UpdateColectionService};