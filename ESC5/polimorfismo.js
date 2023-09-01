class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }

    hablar(){
        console.log(`El animal ${this.nombre} hace ruido.`);
    }
}

class perro extends Animal{
    hablar(){
        console.log(`El perro ${this.nombre} ladra.`);
    }
}

class gato extends Animal{
    hablar(){
        console.log(`El gato ${this.nombre} maulla.`);
    }
}

//creamos los (objetos) instancias de la clase animal perro y gato
var animal1 = new Animal("animal");
var perro1 = new Animal("Perro");
var gato1 = new Animal("gato");

//Llamamos al metodo o función hablar() en diferentes instancias(objetos)
animal1.hablar(); //El animal animal hace ruido.
perro1.hablar(); //El animal perro ladra
gato1.hablar();