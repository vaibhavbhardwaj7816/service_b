import { Request, Response } from "express"
import { userDetails } from "./userData"

export const fetchUserData = async (request:Request, response:Response) => {
    try{
        return response.status(200).json([{userData:userDetails}])
    } catch(error:any){
        console.error('Error--->',error.message)
        return response.status(400).json({message: error.message})
    }
}