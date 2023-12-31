const searchInput = document.getElementById("search-input")
const searchButton = document.getElementById("search-button")
const countryList = document.getElementById("country-list")

function searchCountries(country){
    fetch(`https://restcountries.com/v3.1/name/${country} `)
    .then(response => response.json())
    .then(data => {
        if(data.status == "404"){ //*con .status entramos al elemento del areglo
            countryList.innerHTML = "<p>Country not found</p>"
        }else{
            countryList.innerHTML =""
            data.forEach(country => {
                const countryCard = document.createElement("div") //*.createElement = Crea un elemento en la estructura HTML
                countryCard.classList.add("country-card")
                const currencies = Object.keys(country.currencies)//*[EUR]
                const name_currencies = currencies.map(key => country.currencies[key].name).join()
                const languages = Object.values(country.languages).join("")

                countryCard.innerHTML = `
                <h2>${country.name.common}</h2>
                <h3>${country.name.official}</h3>
                <p>Capital(s): ${country.capital.toString()}</p>
                <p>Currencies: ${name_currencies}</p>
                <p>Languages: ${languages}</p>
                <img src="${country.flags.png}" height=130px width=200px />
                `

                countryList.appendChild(countryCard)//*agrega el resultado de countryCard al arreglo countryList
            });
        }
    }) //*recibo mi lista de paises
}

searchButton.addEventListener("click", function (){
    const countryText = searchInput.value.trim()
    
    if(countryText.length > 2){
        searchCountries(countryText)
    }else{
        countryList.innerHTML = "<p>Enter at least 3 characters to search</p>" //*innerHTML imprime en pantalla el resultado, en este caso un mensaje de error
    }
})