//*Consiste en pasar una funcion o parametro a otra, para que la 2a funcion la ejecute cuando lo requiera.*/

class Callback{
    ejecucion(){
        console.log("========== BLOQUE 3==========");

        const showSuccessMesage = ()=>{
            console.log("Proceso 3 de 3: compra exitosa");
        }

        const validatePaymentCallback = (showSuccessMesage) =>{
            setTimeout(()=>{
                console.log("Proceso 2 de 3: validando tarjeta de credito");
                showSuccessMesage();
            }, 1000)
        }

        console.log("Proceso1 de 3: Presiona el boton de compra");
        validatePaymentCallback(showSuccessMesage);
        console.log("Proceso 4 de 3: Notificación de mi amix");
    }
}

export default new Callback;