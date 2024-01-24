import express from "express"
import { loginController, signupcontroller } from "../controller/authcontroller.js"


const authRouter = express.Router()

authRouter.post('/signup',signupcontroller)
authRouter.post('/login',loginController)




export {authRouter}

