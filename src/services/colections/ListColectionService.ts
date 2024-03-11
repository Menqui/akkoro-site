import { Prisma } from "@prisma/client";
import prismaClient from "../../prisma/prisma";

class ListColectionService {
    async execute(){ 
       const colection = await prismaClient.colection.findMany({
        select:{
            name:true,
            description:true,
            
        },
        orderBy:{
            created_at:Prisma.SortOrder.desc //ordena colocando a coleção mais recente no topo
        }
       })
       return colection;
    }
}

export {ListColectionService};