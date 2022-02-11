import mongoose from "mongoose";

const Admin = new mongoose.Schema({
    name: ({type: String, required: true}),
    email: ({type: String, unique: true, required: true}),
    password: ({type: String, required: true}),
})

export default mongoose.model('Admins', Admin);


// import pkg from 'mongoose';
// const { Schema, model, Types } = pkg;

// const TokenAdmin = new Schema({
//     Admin: {type: Schema.Types.ObjectId, ref: 'Admin'},
//     refreshToken: {type: String, required: true},
// })
// export default model('Token', TokenAdmin);