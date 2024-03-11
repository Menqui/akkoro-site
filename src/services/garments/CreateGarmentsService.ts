import prismaClient from "../../prisma/prisma";


interface GarmetRequest {
name:string,
description:string,
price:string,
banner:string;
colection_id:string;
}

class CreateGarmentsService{
    async execute({name,description,price,banner,colection_id}:GarmetRequest){
        const garment = await prismaClient.garment.create({
            data:{
                name:name,
                price:price,
                description:description,
                banner:banner,
                colection_id:colection_id,
            }
        })
       return garment;
    }
    
}

export {CreateGarmentsService};