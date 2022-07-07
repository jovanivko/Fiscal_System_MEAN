import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let business = new Schema({
    fullname: {
        type: String
    },
    username: {
        type:String
    },
    password: {
        type: String
    },
    phone_number: {
        type: String
    },
    email: {
        type: String
    },
    business_name: {
        type: String
    },
    business_address: {
        type: String
    },
    pib: {
        type: String
    },
    mb: {
        type: String
    }
})

export default mongoose.model('business', business, 'businesses')