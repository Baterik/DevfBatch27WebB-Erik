import { methods as productServices } from "../services/product.service";

const getAllProducts = async(req, res)=>{
    try{
        const sentencia = await productServices.readAllProducts(res); //*PIDE A LA BASE DE DATOS TODOS PARA TRAER TODOS LOS PRODUCTOS
        return sentencia
    } catch (error){
        res.status(400);
        res.send(error.message);
    }
}

export const methods = {
    getAllProducts
}