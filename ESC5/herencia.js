class animal{
    constructor(nombre, color){
        this.nombre = nombre;
        this.color = color;
    }
    comunicarseAnimal(){
        console.log(`El animal ${this.nombre} hace ruido.`);
    }
}

class chancito extends animal{
    constructor(nombre, color, raza){
        super(nombre, color); //llama al constructor padre animal
        this.raza = raza;
    }
    comunicarse(){
        console.log(`El chanchito`);
    }
    correr(){
        console.log(`El chanchito ${this.nombre} corre como demonio`);
    }
}

//acceder a propiedades y llamar a métodos de la clase padre
console.log();