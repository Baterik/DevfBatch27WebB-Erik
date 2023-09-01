//RECORRER LOS DATOS

// SE ASEGURAN QUE LOS VALORES DE LA IZQUIERDA SEAN LOS VALORES MAS CHICOS Y LOS DE LA DERECHA MAYORES

//PREGUNTAR DE DERECHA A IZQUIERDA, SI SOY EL ELEMENTO MÁS CHICO QUE EL DE COMPARACION.

//SI ESO OCURRE ME INSERTO EN ESA POSICION.

function ordenamientoPorInsercion(numerosAOrdenar) {
    //se ingresan los valores del arreglo"3,0,6,1"
    for (let i=1; i< numerosAOrdenar.length; i++){
        let j = i;
        while (j>=1 && numerosAOrdenar[j]<numerosAOrdenar[j-1]) {
            [numerosAOrdenar[j-1], numerosAOrdenar[j]] = [numerosAOrdenar[j], numerosAOrdenar[j-1]];
            j--
        }
    }
    return numerosAOrdenar
}

console.log(ordenamientoPorInsercion([3,0,6,1]));