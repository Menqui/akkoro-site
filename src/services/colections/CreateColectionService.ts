import prismaClient from "../../prisma/prisma";

interface ColectionRequest{
    name:string;
    description:string;
}

class CreateColectionService{
    async execute({name,description}:ColectionRequest){
        if (!name.trim()) {//função que verifica se o nome é vázio
            throw new Error("Nome inválido");
        } else if (!description.trim()) {//função que verifica se a descrição é vázio
            throw new Error("Descrição inválida!");
        }
        const colection = prismaClient.colection.create({
            data:{
                name: name,
                description:description,
            },
            select:{
                id:true,
                name:true,
            }
        })
        return colection
    }
}

export {CreateColectionService};