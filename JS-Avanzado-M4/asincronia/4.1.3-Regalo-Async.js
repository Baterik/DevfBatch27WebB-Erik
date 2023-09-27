class AsyncGift{
    ejecucion(){
        console.log("========== BLOQUE ASYNC==========");

        const validateGiftPromise= ()=>{
            return new PromiseRegalo((resolve, reject)=>{
                console.log("Async: Revisando tu lista de deseos");
                setTimeout(()=>{
                    const statusArray= [200,500];
                    const randomResponse = statusArray[Math.floor(Math.random())];
                    if (randomResponse === 200) { //*200 es= todo ok
                        console.log("Excelente!! Te portaste bien y recibiras un regalo");
                        resolve("Excelente!! Te portaste bien y recibiras tu regalo");                        
                    }else { //*internal server error
                        console.log("En la lista negra. Recibiras un carbon por haber sido un cabron todo el año!")
                        reject("En la lista negra, ya sabes que recibirás!!!")
                    }
                },5000);
            })
        }
        
        async function main(){
            console.log("Async: Enviando tu carta");
            try {
                await validateGiftPromise();
                console.log("3 mensaje de gracias!");
                console.log("4 Entregaremos el paquete cuando este sea enviado");
            } catch (error) {
                console.log("Error: ",error);
            }
            console.log("========== FINAL Async==========");
            console.log("========== FINAL ==========");
        }
    }
}

export default new AsyncGift()