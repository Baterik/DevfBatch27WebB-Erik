//creamos un objeto prototipo

let persona = {
    nombre: 'Daniel',
    edad: 27,
    saludar: function(){
        console.log('Kiuboles mi ñero me dice el mike pero tu me puedes decir ${this.nombre');
    }
}

//funcion flecha

// saludar() =>{
//     console.log('Kiuboles mi ñero me dice el mike pero tu me puedes decir ${this.nombre');
// }

//creando un nuevo objeto que hereda del prototipo persona

let empleado =  Object.create(persona);
empleado.trabajo= 'Taquero';

let alumno = Object.create(persona);
alumno.matricula = '2133010323';


console.log(empleado.persona);
empleado.saludar();