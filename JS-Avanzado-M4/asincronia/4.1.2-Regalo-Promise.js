class PromisesRegalo{
    ejecucion(){
        console.log("========== BLOQUE PROMISE==========");

        const validateGiftPromise= ()=>{
            return new Regalo((resolve, reject)=>{
                console.log("Promise: Revisando tu carta");
                setTimeout(()=>{
                    const statusArray= [200,500];
                    const randomResponse = statusArray[Math.floor(Math.random())];
                    if (randomResponse === 200) { //*200 es= todo ok
                        console.log("Excelente!! te portaste muy bien!");
                        resolve("Excelente!! te portaste muy bien!");                        
                    }else { //*internal server error
                        console.log("Estás en la lista negra, te toco carbon!");
                        reject("estás en la lista de niños malos, te toco carbon!")
                    } 
                },5000);
            })
        }
        console.log("Promise: Presione el botón para enviar tu carta");
        validateGiftPromise()
        .then(response =>{
            console.log(response);
            console.log("Promise: Gracias por seguir creyendo!!!");
        })
        .then(() =>{
            console.log("Promise: busca debajo del arbol en navidad!");
        })
        .catch((error) =>{
            console.log("error: ",error);
        })
        .finally(() =>{
            console.log("========== FINAL PROMISE==========");
        });
        console.log("========== FINAL 2 ==========");
    }
}

export default new PromisesRegalo()