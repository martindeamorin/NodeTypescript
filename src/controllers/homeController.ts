import {Request, Response} from "express";
class homeClass{
    home = (req:Request, res:Response) => {
        res.send("Hola desde controlador")
    }
}

export const homeController = new homeClass();;
