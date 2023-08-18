//CODE REFACTOR = REFABRICAR CODIGO. PASAMOS UNA FUNCION CONSTRUCTORA A UNA CLASS
class Animal {
    //LAS CLASES CUENTAN CON UN METODO LLAMADO constructor(){},
    //EN DONDE SE CONSTRUYEN LAS PROPIEDADES
    constructor(nombre, color){
    this.nombre = nombre;
    this.color = color;
    }
    
    sonidoAnimal(){
        return `Hola, estoy haciendo el sonido de ${this.nombre}`;
    };
};

let perro = new Animal("perro", "negro");
let gato = new Animal("gato", "naranja");

console.log(perro);
console.log(gato.color);