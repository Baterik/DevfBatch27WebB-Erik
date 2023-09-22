/**
 * Bloque 1 - Codigosincrono
 * una linea se ejecuta inmediatamanete despues de la otra
 * no hay codigo dependiente o bloqueante
 */

class Sincronia{
    ejecucion(){
        console.log("========== BLOQUE 1 ==========");
        console.log("Primer proceso de 1");
        console.log("Segundo proceso de 1");
        console.log("Tercer proceso de 1");
    }
}

export default new Sincronia();