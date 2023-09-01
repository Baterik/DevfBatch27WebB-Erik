// crear un objeto contador con un metodo incrementar que aumente el valor "valorActual" en 1 y otro metodo "obtenerValor" que devuelva el valor actual

class Contador {
    constructor(valorActual){
        this.valorActual = valorActual;
    }
    incrementar(){
        let valorIncrementado = valorActual + 1;
        return valorIncrementado;
        console.log(valorIncrementado);

    }
    obtenerValor(){
        return this.valorActual;
    }
}

var numToIncrement = new Contador(2)

numToIncrement.incrementar() //devuelve el numero 3
numToIncrement.incrementar() // devuelve el numero 2



//crear una clase "Rectangulo" con propiedades "ancho" y "alto" y un método "area" que calcule el área del rectangulo

class Rectangulo{
    constructor(ancho, alto){
        this.ancho = ancho;
        this.alto = alto;
    }
areaRec(){
    console.log(`El área del rectangulo es ${this.ancho * this.alto}`);
}

// crear una funcion ordenArray que acepte un array de numeros como parametro y devuelva el array ordenado de menor a mayor

function ordenarArray(array) {    
    let arrayOrdenado = array.slice().sort((a,b)=> a-b)
    return arrayOrdenado;    
}

const numeros = [8,10,15,3,6,14,11]
console.log('Usando dos lineas de código', ordenarArray(numeros));