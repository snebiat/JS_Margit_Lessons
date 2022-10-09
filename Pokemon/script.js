const pcard = document.querySelector(".cards"); 
const poketype = document.querySelector(".types");
/*const pname = document.querySelector(".pokeName");
 */
let pokeData = [];
let pokeSprites = [];
let pokeTypes = [];
let cardTypes = [];
let htmlcard;

const fetchTypes = () => {
    cardTypes = '';
    const types = pokeTypes.map((ptype) => {
      
      /*  return `<div class="pokeType">${ptype.type.name}</div>`; */
      cardTypes += ptype.type.name;
     

    }).join(' ');

    console.log(types);
    return cardTypes;
   

}

const fetchSprites = (pokemon) => {
    htmlcard = '';
    fetch(pokemon.url)
    .then (response => response.json())
    /* .then(data => console.log(data)) */
    .then(data => {
        pokeSprites = data.sprites.other['official-artwork'].front_default;
        pokeTypes = data.types    
        pcard.innerHTML += `<div class="card"> <div> <img class="pokeImage" src="${pokeSprites}" alt=""> </div>
        <div class="pokeName">${pokemon.name}</div> <div class="pokeType">` +  fetchTypes() + `</div> </div>`;
    })
     
    
}

const pokeCards = () => {
    const cards = pokeData.map((pokemonCard) => {
        fetchSprites(pokemonCard); 
    })
}

const fetchData = () => {
    fetch(' https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
    .then (response => response.json())
    .then(data => {
        pokeData = data.results;
        pokeCards();
    })
}









fetchData();


/* 
.then(data => console.log(data))

only data shows ----
count: 1154
next: "https://pokeapi.co/api/v2/pokemon?offset=10&limit=10"
previous: null
results: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
[[Prototype]]: Object

but console.log(data.results) returns the results array only

results: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]


*/