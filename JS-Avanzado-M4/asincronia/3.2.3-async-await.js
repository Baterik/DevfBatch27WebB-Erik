class Async{
    ejecucion(){
        console.log("========== BLOQUE 5==========");

        const validatePaymentPromise= ()=>{
            return new Promise((resolve, reject)=>{
                console.log("2 Validando la tarjeta");
                setTimeout(()=>{
                    const statusArray= [200,500];
                    const randomResponse = statusArray[Math.floor(Math.random())];
                    if (randomResponse === 200) { //*200 es= todo ok
                        console.log("Todo bien!! gasta sin remordimiento");
                        resolve("Todo bien!! gasta sin remordimiento");                        
                    }else { //*internal server error
                        console.log("Se está quemando el servidor")
                        reject("se esta quemando el servidor!!!")
                    }
                },5000);
            })
        }
        
        async function main(){
            console.log("1 Presiona el boton de compra");
            try {
                await validatePaymentPromise();
                console.log("3 mensaje de gracias!");
                console.log("4 Entregaremos el paquete cuando este sea enviado");
            } catch (error) {
                console.log("Error: ",error);
            }
            console.log("========== FINAL ==========");
            console.log("========== FINAL 5 ==========");
        }
    }
}

export default new Async()