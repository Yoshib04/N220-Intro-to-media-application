//refrence to DOM (DOM: Document Object Model as in the html)
const detailsSectionRef = document.querySelector('#details'); //finds the id details in the html

//Data
const pokemon = {
   name: 'Ponyta',
   type: 'Fire',
   weakness: ['Water', "Ground", "Rock"],
};

const myParty = [
   {name: 'Ponyta', type: 'Fire'},
   {name: 'Chimchar', type: 'Fire'},
   {name: 'Meowth', type: 'Normal'},
   {name: 'Houndoom', type: 'Dark, Fire'},
]

console.log('My pokemon: ', pokemon);
console.log('my pokemon type: ', pokemon.type);

console.log('My First pokemon in the party: ', myParty[0]);
console.log('My Last pokemon type in the party: ', myParty[myParty.length - 1].name);

for(let i = 0; i < myParty.length; i++){
   const currentPokemon = myParty[i];
   detailsSectionRef.innerHTML += "<div>";
   detailsSectionRef.innerHTML += "<h4>" + currentPokemon.name + "</h4>";
   detailsSectionRef.innerHTML += "<p>Type(s): " + currentPokemon.type + "</p>";
   detailsSectionRef.innerHTML += "</div>";
}
