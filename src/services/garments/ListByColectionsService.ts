import prismaClient from "../../prisma/prisma";

interface ProductRequest{
    name:string;
}

class ListByColectionService{
   async execute({name}:ProductRequest){
       const findByName = await prismaClient.garment.findMany({
        where: {
            colection: {
                name: name
            }
        }
       })
       return findByName;
   }


}
export {ListByColectionService}