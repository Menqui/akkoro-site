import prismaClient from "../../prisma/prisma";
import { compare } from'bcryptjs';
import { sign } from 'jsonwebtoken'

interface AuthRequest{
    email:string;
    password:string;
}


class AuthUserService{
    async execute({email,password}: AuthRequest){
       //verificar se o email existe
       const user = await prismaClient.users.findFirst({
        where:{
            email:email
        }
       })
        if(!user){ //tentando logar com usuario que não existe 
          throw new Error("Usuario/Senha incorreto(s)!")
        }

         //Verificar se a senha está correta
        const passwordMatch  = await compare(password,user.password);
        if(!passwordMatch){//se a senha está errada
            throw new Error("Usuario/Senha incorreto(s)!")
        }
        
        //Gerar um token JWT e devolver os dados ao user como id,name e email
        const token = sign(
            {
                name: user.name,
                email: user.email,
            },
            process.env.JWT_SECRET,{
                expiresIn: '30d'
            }
        )   

       return {
        name:user.name,
        email:user.email,
        token:token
       }
    }
}

export {AuthUserService};