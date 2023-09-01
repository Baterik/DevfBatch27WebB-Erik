const arr = [0, 12, 67, 4, 2, 1];

function ordenamientoBurbuja(arrNumerosAOrdenar) {
    const total = arrNumerosAOrdenar.length;

// EL PRIMER FOR SOLO ES PARA AVANZAR ENTRE ELEMENTOS DEL ARREGLO.
    for (let i = 0; i < total; i++) {
        //EN ESTE FOR COMPARA LOS VALORES POR PAREJA Y ORDENA DE MENOR A MAYOR
        for (let j = 0; j < total; j++) {
            if (arrNumerosAOrdenar[j]>arrNumerosAOrdenar[j + 1]) {
                [arrNumerosAOrdenar[j], arrNumerosAOrdenar[j+1]] = [arrNumerosAOrdenar[j+1], arrNumerosAOrdenar[j]];                
            }
        }        
    }
    return arrNumerosAOrdenar    
}

console.log(ordenamientoBurbuja(arr));