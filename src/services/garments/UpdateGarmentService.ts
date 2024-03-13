import prismaClient from "../../prisma/prisma";

interface UpdateRequest{
    id:string;
    name?:string;
    description?:string;
    price?:string;
    banner?:string;
    
}

class UpdateGarmentService{
  async execute({name,description,price,banner,id}:UpdateRequest){
      const garment = prismaClient.garment.update({
        where:{id:id},
        data: {
            name: name,
            description: description,
            price: price,
            banner: banner,
        }
    });
    return garment;
      
  }
}

export {UpdateGarmentService};