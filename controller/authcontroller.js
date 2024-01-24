import UsersSchema from '../models/userModel.js'
const signupcontroller = async (req, res) => {
    try {
        const { Name, email, password } = req.body
        if (password.length < 8) {
            return res.json({
                status: false,
                message: "Password must have 8 character"
            })
        }
        const user = {
            Name: Name,
            email: email,
            password: password
        }
        const userSchemaCheck = new UsersSchema(user)
        const userSave = await userSchemaCheck.save()
        console.log(userSchemaCheck)


        res.json({
            status: true,
            message: "SignUp Successfully"
        })
    } catch (error) {
        res.json({
            status: false,
            message: error.message
        })
    }
}
const loginController = async(req,res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) return res.status(400).json({
            status: false,
            message: "Missing Fields"
        })
        const userExist = await UsersSchema.findOne({ email: email })
        if(userExist){
            return res.json({
                status:true,
                message:"LoginSuccessfully"
            })
        }
        else{
            res.json({
                status:false,
                message:"User Not Found"
            })
        }
    }catch(error){
        res.json({
            status:false,
            message:error.message
        })
    }
}
export { signupcontroller, loginController }