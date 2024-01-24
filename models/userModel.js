import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);
export default mongoose.model('User', UsersSchema);