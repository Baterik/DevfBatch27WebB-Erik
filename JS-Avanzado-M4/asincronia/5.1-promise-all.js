function prepararPizza(especialidad, tiempo){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(`Pizza preparada: ${especialidad}`)
        }, tiempo);
    })
}

const ordenPizza = [
    prepararPizza('Hawaiana',2000),
    prepararPizza('3 quesos',3000),
    prepararPizza('Pastor',2500),
    prepararPizza('Mexicana',1500),
]


Promise.all(ordenPizza).then(
    pizza => {
        pizza.forEach(pizza => console.log(pizza))
    }
)
//**siguiente paso correr en terminal con "node + espacio + nombre del archivo .js" */