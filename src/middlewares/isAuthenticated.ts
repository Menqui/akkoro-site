import { Request, Response , NextFunction } from "express";
import {verify} from 'jsonwebtoken';

interface Payload{
    sub:string;
}


export function isAuthenticated(
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

    return next();

   }catch(error) {
    return res.status(401).end;// não autorizado
   }
  
}