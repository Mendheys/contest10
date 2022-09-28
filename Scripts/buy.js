// Write All `My Movies`  Page Script Here

let buyLocalData = JSON.parse(localStorage.getItem("buy-list"));

let container = document.querySelector("tbody")

function createCard(data){
    container.innerHTML = null
    data.map((item) => {
        let row = document.createElement("tr");

        let movie = document.createElement("td");
        movie.innerText = item.movie

        let actor = document.createElement("td");
        actor.innerText = item.actor;

        let descript = document.createElement("td");
        descript.innerText = item.description;

        let date = document.createElement("td");
        date.innerText = item.date;

        let category = document.createElement("td");
        category.innerText = item.category;

        let price = document.createElement("td");
        price.innerText = item.price;

        

        row.append(movie,actor,descript,date,category,price)
        container.append(row)


    })
}
createCard(buyLocalData)