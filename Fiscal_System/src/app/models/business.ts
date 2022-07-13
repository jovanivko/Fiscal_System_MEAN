export interface Business{
    fullname: string,
    username: string,
    password: string,
    phone_number: string,
    email: string,
    business_name: string,
    business_address: string,
    pib: string,
    mb: string,
    logo: File,
    category?:number,
    activity_code?:string,
    pdv?: boolean,
    storage?: {
        number: number,
        warehouses: [{
            id: number,
            name: string
        }]
    },
    cash_registers?: {
        number: number,
        cash_registers: [{
            location: string,
            type: string
        }]
    }
}