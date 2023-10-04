import {getConnection} from "./../common/connection";


async function readAllProducts(response){
    const connection = await getConnection();
    const resultado = await connection.query("Select * From products")
    return response.json(resultado)
}

export const methods ={
    readAllProducts
}