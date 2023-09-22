function prepararPizza(especialidad, tiempo){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(tiempo<3000)
            resolve(`Pizza preparada: ${especialidad}`)
        else
        reject('La pizza quedó fría')
        }, tiempo);
    })
}

const ordenPizza = [
    prepararPizza('Hawaiana',2000),
    prepararPizza('3 quesos',3001),
    prepararPizza('Pastor',2500),
    prepararPizza('Mexicana',1500),
]


// Promise.all(ordenPizza).then(
//     pizza => {
//         pizza.forEach(pizza => console.log(pizza))
//     }
// ).catch(err => console.log(err)
// )

async function mandarOrdenPizzas() {
    try{
        const pizzasPreparadas = await Promise.all(ordenPizza)
        pizzasPreparadas.forEach(pizza => console.log(pizza))
    }catch(error){
        console.error(error)
    }
}

mandarOrdenPizzas()