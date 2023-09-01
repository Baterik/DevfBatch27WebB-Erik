//*Una cola es una estructura de datos muy similar a una pila, es decir, también opera de forma lineal y unidireccional (se agregan elementos de inicio a fin) FIFO= Fisrt In-First Out.
//* las colas o filas tienen 2 elementos, Enqueue (enkiu) y dequeue (dekiu)
//* Método auxiliares isEmpty: Indica si esta vacía; front: Nos permite ver el primer elemento sin eliminar.
//* FIFO FirstIn FirstOut

class Queue{
    constructor(){
        this.items=[]; //*Array en el que guardamos nuestros elementos
    }

    enqueue(item){ //*encolar o agregar a la fila
        this.items.push(item); //* Agrega un elemento al final de la fila
    }

    dequeue(){ //*desencolar o sacar de la fila
        if (this.isEmpty()){
            return "Esta fila está vacía"
        }
        return this.items.shift(); //*retira el primer elemento de la fila
    }

    front(){
        return this.items[0] //*devuelve el primer elemento sin eliminarlo de la cola o fila
    }

    isEmpty(){
        return this.items.length === 0; //*verifica si la cola está vacía
    }
    size(){
        return this.items.length;  //* devuelve la cantidad de elementos de la fila o cola
    }
}

const cola = new Queue();

console.log(cola.front());

cola.enqueue(7);
cola.enqueue(24);
cola.enqueue(11);
cola.enqueue(313);

console.log(cola);

cola.enqueue(cola.dequeue()); //devuelve el 7

cola.enqueue(cola.front()); // devuelve el 24 (el primer elemento)

cola.enqueue(cola);

cola.enqueue(cola.size());
