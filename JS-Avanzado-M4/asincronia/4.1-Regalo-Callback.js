class CallbackRegalo{
    ejecucion(){
        console.log("========== BLOQUE CALLBACK==========");

        const showSuccessMesage = ()=>{
            console.log("Santa recibe tu carta");
        }

        const validateGiftCallback = (showSuccessMesage) =>{
            setTimeout(()=>{
                console.log("Paso 2: Revisando la lista de niños buenos");
                showSuccessMesage();
            }, 1000)
        }

        console.log("Presiona el boton para enviar tu carta a Santa");
        validateGiftCallback(showSuccessMesage);
        console.log("Notificación de llegada de tu carta a Santa");
    }
}

export default new CallbackRegalo;