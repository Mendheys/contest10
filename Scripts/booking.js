// Write All `All Movies`  Page Script Here

let localData = JSON.parse(localStorage.getItem("movie-list"))

let localStorageBuy = JSON.parse(localStorage.getItem("buy-list")) || []

let container = document.getElementById("container");

document.getElementById("movie-count").innerText = localData.length;

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

        let buyBtn = document.createElement("button")
        buyBtn.innerText = "Buy"
        buyBtn.addEventListener("click",() => {
            localStorageBuy.push(item);
            localStorage.setItem("buy-list",JSON.stringify(localStorageBuy));

            let delet = localData.filter(e => {
                return e != item
            });
            localStorage.setItem("movie-list",JSON.stringify(delet))
            location.reload()


        })


        row.append(movie,actor,descript,date,category,price,buyBtn)
        container.append(row)


    })
}
createCard(localData)

let filter = document.getElementById("filter")
filter.addEventListener("change",handleChange);

function handleChange(){

   

    let filerData = localData.filter(item => {
        return item.category == filter.value
    });
    createCard(filerData)
}