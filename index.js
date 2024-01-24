import express from "express"
import dotenv from "dotenv"
import { authRouter } from "./routing/authRoute.js"
import { dbConnection } from "./utils/config.js"
const app = express()
app.use(express.json())
dotenv.config()
dbConnection()



app.use('/auth',authRouter)
// app.use('/jobs',jobsRouter)


app.listen(process.env.PORT,()=>{
    console.log(`server is running in port Number ${process.env.PORT}`)
})