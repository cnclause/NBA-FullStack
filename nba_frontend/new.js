let searchParams = new URLSearchParams(window.location.search)
let query = searchParams.get("id")

const body = document.body

function createCard(player){
    let div = document.createElement("div")
    let h3 = document.createElement("h3")
    let p = document.createElement("p")
    let a = document.createElement("a")

    div.className = "cards"
    h3.innerText = player.name
    p.innerText = `Jersey Number: ${player.number}`


    div.append(h3, p)

    body.appendChild(div)
}

fetch(`http://localhost:3000/players/${query}`)
.then(response => response.json())
.then(createCard)

