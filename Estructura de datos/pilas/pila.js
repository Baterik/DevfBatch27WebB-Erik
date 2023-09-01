class Stack{
    constructor(){
        this.items = [] //Usamos un array para poder almacenar los datos en nuestra pila
    }

    push(item){
        this.items.push(item); // Agregamos al final de la pila un elemento
    }

    pop (){ //Elimina y muestra el último elemento de nuestra pila o stack
        if (this.isEmpty()){ //El método se realizara más tarde para saber si la pila esta vacía 
            return "La pila está vacía";
        }
        return this.items.pop()
    }

    peek(){ // [0,1,2,3,4] este arreglo tiene un tamaño de 5 y en la posición 4 esta el #4
        return this.items[this.items.length -1]; //Devolvemos el último valor de nuestra pila sin eliminarlo
    }

    size(){
        return this.items.length; //Devuelve el número de elementos de nuestra pila
    }

    isEmpty(){
        return this.items.length === 0; //verifica que nuestra pila esté vacía.
    }
}

//uso de la pila

const pila = new Stack();
pila.push(27);
pila.push(10);
pila.push(22);
pila.push(37);
pila.push(77);
pila.push(19);

console.log(pila);
console.log(pila.pop()); // elimina el último numero agregado "19"

console.log(pila);

console.log(pila.peek()); //muestra el num.77

console.log(pila.size()); //muestra el número de elementos en el array. (size es sólo el nombre de nuestro metodo)

