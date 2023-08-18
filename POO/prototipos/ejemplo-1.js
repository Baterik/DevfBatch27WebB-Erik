//JS ES UN LENGUAJE DE PROGRAMACION MULTIPARADIGMA,
//PRINCIPALMENTE ORIENTADO A OBJETOS Y BASADO EN PROTOTIPOS
//un prototipo es una funcion, al crear un prototipo la primer letra debe ser mayuscula

function Animal (nombre, color) {
    this.nombre = nombre;
    this.color = color;
    //DIFERENCIA ENTRE METODO Y FUNCION: EL METODO ES UNA FUNCION QUE SE DECLARA DENTRO DE UN PROTOTIPO
    this.sonidoAnimal = function sonidoAnimal(){
        return `Hola, estoy haciendo el sonido de ${this.nombre}`;
    };
};

//UN OBJETO, ES UNA INSTANCIA DE UN PROTOTIPO
const primerAnimal = new Animal("Jaguar", "amarillo")
console.log(primerAnimal);

//A partir del prototipo de arriba, crear los siguientes objetos, jaguar, jirafa, conejo

const jaguar = new Animal("Jaguar", "amarillo");
const jirafa = new Animal("jirafa", "cafe");
const conejo = new Animal("conejo", "blanco");

console.log(jaguar);
console.log(jirafa);
console.log(conejo);


//PARA ACCEDER A LAS PROPIEDADES DE UN OBJETO, HACEMOS USO DE LA NOTACION DEL PUNTO
console.log(jaguar.nombre);
console.log(jirafa.color);

//TAMBIEN PUEDO ACCDDER A LAS PROPIEDADES DE UN OBJETO MEDIANTE CORCHETES
console.log(conejo["nombre"]);

//UN METODO SE EJECUTA CON LA NOTACION DEL PUNTO .SONIDOANIMAL()
console.log(jaguar.sonidoAnimal());