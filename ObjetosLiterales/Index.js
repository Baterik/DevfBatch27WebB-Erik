// 1.2) Imprime el contenido de la propiedad character en consola como parte de un mensaje de bienvenida. El mensaje en consola debe lucir similar a esto:
// 1 $ "Hola, soy un gato ficticio. Mejor conocido como Chesire Cat.
//2 Aparecí por primera vez en Alice's Adventures in Wonderland." 

let character = {
    nombre: "Chesire",
    animal: "Cat",
    color: "blanco con rayas rosas y moradas",
    cuento: "Alice's adventures in wonderland",

    saludar: function(){
        return `Hola, soy un gato ficticio. Mejor conocido como ${this.nombre} Aparecí por primera vez en ${this.cuento}`
    }
}

console.log(saludar());