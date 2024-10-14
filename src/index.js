// Your code here
const baseURL = 'http://localhost:3004/'

const ticket = document.getElementById('ticket-num')
const runtime = document.getElementById('runtime')
const description = document.getElementById('film-info')
const filmItem = document.getElementById('films')
const button = document.getElementById('buy-ticket')
const pic = document.getElementById('poster')
const title = document.getElementById('title')
const showtim =document.getElementById('showtime')

//document.addEventListener ("DOMContentLoaded", FirstMovie() )


function FirstMovie(){
    const firstMovieUrl = "http://localhost:3004/films/1"
    fetch(firstMovieUrl)
    .then(res => res.json())
    .then(fMovie =>{
        //const ticketsAvailable = Number(film.capacity) - Number(film.tickets_sold)
        let remainingTickets = fMovie.capacity - fMovie.tickets_sold;
        pic.src = fMovie.poster;
        pic.alt = fMovie.title;
        title.textContent = fMovie.title;
        runtime.textContent = `${fMovie.runtime} minutes`;
        description.textContent = fMovie.description;
        showtim.textContent = fMovie.showtime;
        ticket.textContent = remainingTickets;
    })
}
FirstMovie()

function fetchMovieTitle(){
    fetch ('http://localhost:3004/films')
        .then (response => response.json())
        .then (films => {
            films.forEach(film => {
                const movieName =document.createElement('li')
                movieName.textContent = film.title;
                movieName.classList.add('film')
                movieName.classList.add('item')
                movieName.id = `title ${film.id}`
                filmItem.appendChild(movieName)
                details(film)
                })
        })
}
fetchMovieTitle()
buyTicket()

function details(film) {
    const list = document.getElementById(`title ${film.id}`)
    list.addEventListener ("click", (event) => {
        pic.src = film.poster
        pic.alt = film.name
        description.textContent = film.description;
        showtim.textContent = film.showtime
        runtime.textContent = ` ${film.runtime} minutes`
        const ticketsAvailable = Number(film.capacity) - Number(film.tickets_sold)
        ticket.textContent = ticketsAvailable

    })
}

function buyTicket(film){
    button.addEventListener('click', (event) =>{
        //getticketNum.textContent
        let ticketsAvailable = Number(ticket.textContent)
        if (ticketsAvailable !== 1){
            ticketsAvailable -=1;
            ticket.textContent = ticketsAvailable
            console.log(`tickets`, ticketsAvailable)
        }else {
            ticketsAvailable -=1;
            ticket.textContent = ticketsAvailable
            button.textContent = 'Sold Out';
            button.className = 'sold-out';
            button.disabled = true;

        }
    })
}

////comment
