import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let user = new Schema({
    username: {
        type:String
    },
    password: {
        type: String
    },
    isEntity: {
        type: Boolean
    },
    isAdmin: {
        type: Boolean
    }
})

export default mongoose.model('user', user, 'users')