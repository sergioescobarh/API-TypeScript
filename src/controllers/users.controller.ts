import { Request, Response } from "express";
import prisma from '../db'
//types
enum USERROLE {
    ADMIN = "admin",
    CUSTOMER = "customer",
}
type User = {
    name: string;
    role: USERROLE;
    email: string;
    password: string;
    // shores: string[];
};

const userController = {
    //list users
    getUsers: async (req: Request, res: Response) => {
        const users = await prisma.user.findMany();
        res.json(users);
    },

    //create user
    createUser: async (req: Request, res: Response) => {
        const user = await prisma.user.create( {data:{...req.body}} ) 
        console.log(user) 
        res.json(user)
              // try{
        //     const user = await prisma.user.create({data:{...req.body}});
        //     console.log({...req.body});
        // res.sendStatus(200).json(user);
        // }catch{ (err:any) => res.send(err)} 
        
    },
};

export default userController;
