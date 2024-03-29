import { Request, Response , NextFunction } from "express";
import {verify} from 'jsonwebtoken';
import prismaClient from "./../prisma/prisma";

interface Payload{
    sub:string;
}


export async function isAuthenticated(
    req:Request,
    res:Response,
    next: NextFunction
){
  //Receber o Token
  const authToken = req.headers.authorization;
  if(!authToken){ //se o token não tiver sido recebido
     return res.status(401).end;
  } 
   const [,token] =authToken.split("  ");
    
   try {
    //validar token
    const { sub } = verify(
        token,
        process.env.JWT_SECRET
        ) as Payload;
    //Recuperar o id  do token e colocar o dentro de uma variavel user_id dentro do req
    req.user_id = sub;  

    //verificar se o usuário é admistrador
    const user = await prismaClient.users.findUnique({
        where:{
            id:sub
        }
    });
    if(!user || !user.isAdmin){ //se o usuário não existe e/ou não for administrador 
      res.status(403).end(); //usuário bloqueado
    }
   else{
    return next();
     }

   }catch(error) {
    return res.status(401).end;// não autorizado
   }
  
}