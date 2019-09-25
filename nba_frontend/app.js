

const body = document.body
function createCards(players){
    let div = document.createElement("div")
    div.className = "cards"

    players.forEach(player => {
        // let h3 = document.createElement("h3")
        let p = document.createElement("p")
        let a = document.createElement("a")

        // h3.innerText = player.name
        p.innerText = `Jersey Number: ${player.number}`
        a.href = `new.html?id=${player.id}`
        a.innerText = `Show ${player.name}`

        div.append(a, p) 
        // div.append(h3, p, a)
    })

    body.appendChild(div)
}

function createOption(teams){
    let teamDropdown = document.getElementById("team_dropdown")
    teams.forEach(team => {
        let option = document.createElement("option")
        option.innerText = team.name
        option.value = team.id
        teamDropdown.appendChild(option)
    })
}



fetch("http://localhost:3000/players")
    .then(response => response.json())
    .then(createCards) 
    // .then(response => createCards(response)) is same as above

fetch("http://localhost:3000/teams")
    .then(response => response.json())
    .then(createOption)
    // .then(response => createOption(response)) is same as above