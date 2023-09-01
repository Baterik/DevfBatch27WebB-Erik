//* Una lista enlzada es un nodo, una estructura lineal con un enlace al siguiente elemento, (ejemplo: el uso más comun es en la generación de los historiales de navegación).

class Nodo{
    constructor(valor){
        this.valor = valor; //* Datos almacenados en el nodo
        this.nodoSiguiente = null; //*Referencia a donde apuntara el nodo
    }
}

class ListaEnlazada{
    constructor(){
        this.cabeza = null; //*Creamos el puntero y apuntamos al primer nodo
    }

    append(valor){
        const nuevoNodo = new Nodo(valor);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo; //Si la lista está vacía el nuevo nodo se convierte en el primero
        } else{
            let actual = this.cabeza;
            while (actual.nodoSiguiente) {
                actual = actual.nodoSiguiente;
            }
            actual.nodoSiguiente = nuevoNodo; //Agrega el nuevo nodo al final de la lista.
        }
    }

    prepend(valor){
        const nuevoNodo = new Nodo(valor);
        nuevoNodo.nodoSiguiente = this.cabeza // Establece el nuevo nodo como el primero o cabeza
        this.cabeza = nuevoNodo;
    }
    delete(valor){
        if (!this.cabeza) {
            return "Borre la cabeza";
        }
        if (this.cabeza.valor === valor) {  //* Elimina el primer nodo si contiene los datos buscados
            this.cabeza = this.cabeza.nodoSiguiente;
            return;
        }
        let actual = this.cabeza;
        while (actual.nodoSiguiente) {
            if (actual.nodoSiguiente.valor === valor) {
                actual.nodoSiguiente = actual.nodoSiguiente.nodoSiguiente; //* Elimina el nodo siguiente si contiene los datos buscados
                return;
            }
            actual= actual.nodoSiguiente;
        }
    }

    display(){
        let actual = this.cabeza;
        while (actual) {
            console.log(actual.valor); //Muestra los datos de cada nodo en la lista
            actual = actual.nodoSiguiente;
        }
    }
}

const listaEnlazada = new ListaEnlazada();
listaEnlazada.append(10);
listaEnlazada.append(23);
listaEnlazada.append(19);
listaEnlazada.append(9);
listaEnlazada.append(7);
listaEnlazada.append(18);
listaEnlazada.append(50);
console.log("----------");

listaEnlazada.delete(23);
listaEnlazada.display();
console.log("----------");

listaEnlazada.delete(10);
listaEnlazada.display();
console.log("----------");

listaEnlazada.prepend(100);
listaEnlazada.display();
console.log("----------");