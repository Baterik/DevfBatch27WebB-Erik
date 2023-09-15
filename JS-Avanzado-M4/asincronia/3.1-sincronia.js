/**
 * Bloque 1 - Codigosincrono
 * una linea se ejecuta inmediatamanete despues de la otra
 * no hay codigo dependiente o bloqueante
 */

class Sincronia{
    ejecucion(){
        console.log("========== BLOQUE 1==========");
        console.log("Primer proceso");
        console.log("Segundo proceso");
        console.log("Tercer proceso");
    }
}

export default new Sincronia();