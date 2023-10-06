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
                <strong>${user.name}</strong> <p>${user.email}</p>
                <button data-id="${user._id}" class="btn btn-edit">Editar</button>
                <button data-id="${user._id}" class="btn btn-delete">Eliminar</button>
            `
            userList.appendChild(li)
        });
    })
}

//*Alta de usuarios
crudForm.addEventListener("submit", function (event) {
    event.preventDefault()

    const newUser = {
        name: nameInput.value,
        email:emailInput.value
    }
    
    fetch(apiURL, {
        method: "POST",
        body:JSON.stringify( //convierte la info en formato JSON para enviarlo al servidor
            newUser
        ),
        headers:{
            "Content-Type" :"application/json"
        }
    }).then(() => {
        nameInput.value = ""
        emailInput.value =""
        loadUsers()
    })
})

userList.addEventListener("click", function (event) {
    //Edición de un usuario
    if (event.target.classList.contains("btn-edit")) {
        const userId = event.target.getAttribute("data-id") //id del usuario a editar
        const editedUser = prompt("Editar nombre:")
        if (editedUser !== null) {
            fetch(`${apiURL}/${userId}`,{
            method:"PUT",
            body:JSON.stringify({name: editedUser, email: event.target.parentElement.querySelector("p").textContent }),
            headers:{
                "Content-Type" :"appication/json"
            }
        })
        .then(() =>{
            loadUsers()
        })
    }
    }
})

document.addEventListener("DOMContentLoaded", function(){
    loadUsers()
}) //*El evento DOMcontentLoaded significa que cuando termina de cargar o al entrar por primera vez a la pagina, carga toda la info y al terminar de cargarse se dispara el evento.

