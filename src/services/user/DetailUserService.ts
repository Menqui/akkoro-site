import prismaClient from "../../prisma/prisma";

class DetailUserService{
    async execute(user_id: string){

     const user = await prismaClient.users.findFirst({
        where:{
            id: user_id,
        },
        select:{
            id:true,
            name:true,
            email:true,
        }
     })   
    return user; //retorna as infos do user com base no id
    }
}

export {DetailUserService}
