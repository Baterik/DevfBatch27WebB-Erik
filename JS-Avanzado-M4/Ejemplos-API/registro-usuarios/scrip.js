const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const userList = document.getElementById("user-list")
const crudForm = document.getElementById("crud-form")
const apiKey ="c15c2ebaebee4835be7694810d055cde"
const apiURL = `https://crudcrud.com/api/${apiKey}/users`

function loadUsers() {
    fetch(apiURL) //*Fetch es el método para consultar la API
    .then(response => response.json())
    .then(data =>{ //* data=> retorna un arreglo de objetos literales con la info de los usuarios
        userList.innerHTML =""
        data.forEach(user => {
            const li = document.createElement("li")
            li.innerHTML = `
                <strong>${user.name}</strong> (${user.email})
                <button data-id="${user._id}" class="btn btn-edit">Editar</button>
                <button data-id="${user._id}" class="btn btn-delete">Eliminar</button>
            `
            userList.appendChild(li)
        })
    })
}


document.addEventListener("DOMContentLoaded", function(){
    loadUsers()
}) //*El evento DOMcontentLoaded significa que cuando termina de cargar o al entrar por primera vez a la pagina, carga toda la info y al terminar de cargarse se dispara el evento.

