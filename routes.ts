import { Router } from "express";
import { fetchUserData } from "./controller";

const Routes = Router()

Routes.get('/fetch-user-data', fetchUserData)

export default Routes