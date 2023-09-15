class Asincronia{
    ejecucion(){
        //**ejemplo de una forma de pago */
        console.log("========== BLOQUE 2==========");
        const validatePayment = () =>{
            setTimeout(()=>{
                console.log("Proceso 2 (B2): validando tarjeta de credito");
            }, 100)
        }

        console.log("Proceso 1: Presiona el boton comprar");
        validatePayment();
        console.log("Proceso3: compra exitosa");
    }
}

export default new Asincronia();