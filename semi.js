function createGame (player1, hour, player2) {
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira do${player1}" />
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="Banderia da${player2}" />
        </li>

    `
}


let delay = -0.7;
function createCard (date, day, games) {
    delay = delay + 0.7;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date}<span>${day}</span></h2>

            <ul>
                ${games}    
          
        
            </ul>
        </div>
    `

}

document.querySelector('#cards').innerHTML = 

    createCard('13/12', 'Terça', 
    createGame('white', '16:00', 'white'))+
    createCard('14/12', 'Quarta',
    createGame('white','16:00','white'))