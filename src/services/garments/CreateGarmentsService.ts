import prismaClient from "../../prisma/prisma";


interface GarmetRequest {
name:string,
description:string,
price:string,
banner:string;
colection_id:string
}

class CreateGarmentsService{
    async execute({name,desfription,price,banner}){
     return {ok:true};

    }
}

export {CreateGarmentsService};