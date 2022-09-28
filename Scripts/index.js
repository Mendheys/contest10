// Write All Home  Page Script Here

let localStorageMovie = JSON.parse(localStorage.getItem("movie-list")) || []

let from = document.getElementById("movieForm")

from.addEventListener("submit",handleSubmit)

function handleSubmit(e){
    e.preventDefault(); 

    let movie = from.elements[0].value;

    let actor = from.elements[1].value;

    let description = from.elements[2].value;

    let date = from.elements[3].value;

    let category = from.elements[4].value;

    let price = from.elements[5].value;

    let payload = {
        movie : movie,
        actor : actor,
        description : description,
        date : date,
        category : category,
        price : price
    }
    localStorageMovie.push(payload)
    localStorage.setItem("movie-list",JSON.stringify(localStorageMovie))

}