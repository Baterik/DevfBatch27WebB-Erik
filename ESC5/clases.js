//Definimos una clase
class pais{
    constructor(nombre, noPoblacion, coordenadas){
        this.nombre = nombre;
        this.noPoblacion = noPoblacion;
        this.coordenadas = coordenadas;
    }
    info(){
        console.log("El país "+ this.nombre+" se encuentra en las coordenadas"+this.coordenadas+" y tiene una población de"+this.noPoblacion);
    }
}

//se crea un nuevo objeto, con los atributos en el mismo orden de los parametros de la clase padre
var mexico = new pais("México", "126.7 millones de personas", "23.634501, -102.552784")

var tangamandapio = new pais("Tangamandapio", 2, "0,-0")

//imprimimos en patalla los objetos
console.log(mexico);

mexico.info();
