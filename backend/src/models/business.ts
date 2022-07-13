import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Business = new Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    business_name: {
        type: String,
        required: true
    },
    business_address: {
        type: String,
        required: true
    },
    pib: {
        type: String,
        required: true
    },
    mb: {
        type: String,
        required: true
    },
    logo:{
        data: Buffer,
        content: String,
        required: true
    },
    category: Number,
    activity_code: String,
    pdv: Boolean,
    bank_accounts: [new Schema({
        bank: String,
        account_no: String
    })],
    storage: new Schema({
        number: {
            type: Number,
            default: 1
        },
        warehouses:[new Schema({
            id: Number,
            name: String
        })
    ]}),
    cash_registers: new Schema({
        number: {
            type: Number,
            default: 1
        },
        registers: [new Schema({
            location: String,
            type: String
        })]
    })
})

export default mongoose.model('Business', Business, 'businesses')