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

//C create es un verbo POST en una API restful
const postProduct = async(req, res) =>{
    try {
        const {sku, name, description, price, url_image} = req.body;
        console.log("nuevo producto Controlador");
        const query= await productServices.createProduct(sku,name,description,price,url_image,res)
    } catch (error){
        res.status(400);
        res.send(error.message);
        
    }
}

// R read es un verbo get en una API restful
const getProductBySku = async (req,res)=>{
    try {
        const query = await productServices.readProduct(req.params,res)
        return query
    } catch (error) {
        res.status(400);
        res.send(error.message);
    }
}

// U update
const updateProduct = async (req,res)=>{
    try {
        const {sku} = req.params
        const {name, description,price,url_image} = req.body;
        const query = await productServices.upteProduct(sku, name, description,price,url_image,res)
        console.log("SKU:",sku)
        console.log("Body:",req.body)

        return query
    } catch (error) {
        res.status(400);
        res.send(error.message);
    }
}

// D delete
const deleteProductBySku = async (req,res)=>{
    try {
        console.log("MONO")
        const query = await productServices.deleteProduct(req.params,res);
        return query
    } catch (error) {
        res.status(400);
        res.send(error.message);
    }
}


export const methods = {
    getAllProducts, 
    postProduct,
    getProductBySku,
    updateProduct,
    deleteProductBySku
}

