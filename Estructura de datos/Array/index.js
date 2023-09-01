//* COMO CREAR UN ARREGLO DESDE CERO CON CODIGO?
class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
    };
    get (index){
        return this.data[index];
    }
    push(element) {
    this.data[this.length] = element;
    this.length++;
    return this.data;
    }
    pop(){
    //*VALIDAR QUE EL ARREGLO NO ESTE VACIO    
    const lastItem = this.data[this.length-1]; // POSICIONARNOS EN EL ULTIMO ELEMENTO
     this.data[this.length-1]; //Eliminamos el último elemento
     this.length--; //MODIFICAR LA CANTIDAD DE ELEMENTOS
     return lastItem;
    };

    //METODO PARA AÑADIR UN ELEMENTO AL INICIO DEL ARREGLO
        unshift(item) {
        //1.PEDIR EL VALOR A AGREGAR
         //2. MODIFICAR LOS INDICES, DEZPLAZANDOLOS HACIA ADELANTE.
           //3. UNA VEZ QUE SE TIENE, Y LOS INDICES SE HAYAN MODIFICADO.
            //4. COLOCAR EL VALOR EN EL INDICE "0"
              //5. AUMENTAR LA LONGITUD DEL ARREGLO EN UNA UNIDAD.
                //6. RETORNAR LA CANTIDAD NUEVA DE ELEMENTOS DEL ARREGLO.
        const lastItem = this.data[this.length-1];
        for (let i = 0; i <= this.length -1; i++){
            this.data[i+1]= this.data[i];          
        };

        this.data[this.length] = lastItem;
        this.data[0] = item;
        this.length++;
        return this.length;
    };

    // TODO: CREAR EL METODO PARA REMOVER EL PRIMER ELEMENTO (METODO SHIFT)
    shift(item){}
};

const arr1 = new MyArray();
console.log(arr1);

console.log(arr1.get(1));

arr1.push("Dolores");
arr1.push(["Español", "Matematicas"]);
arr1.push(78);

console.log(arr1.get(0));
console.log(arr1);
