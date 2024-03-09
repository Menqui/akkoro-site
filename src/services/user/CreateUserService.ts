
import prismaClient from "../../prisma/prisma";
import { hash } from 'bcryptjs'

interface UserRequest {
    name:string;
    email:string;
    password:string;

}

class CreateUserService{
    async execute({name,email,password}:UserRequest){
       // verifica se enviou um e-mail
       if(!email){
        throw new Error("E-mail incorreto!");
       }
       
       //verificar se esse email já está cadastrado
       const userAlredyExist = await prismaClient.users.findFirst({
        where:{
            email:email
        }
       })
         if(userAlredyExist){ // se o usuário ja existir
           throw new Error("Usuário já cadastrado!")
         }
        
        //Criptografar a senha
        const passwordHash = await hash(password,8)


        //Cadastrar o usuário
        const user = await prismaClient.users.create({
            data:{
                name: name,
                email: email,
                password: passwordHash,
            },
            select:{   //informar o que você quer devolver ao user
                id: true,
                name: true,
                email:true,
            }
        })

       return user;
    }
}

export {CreateUserService}