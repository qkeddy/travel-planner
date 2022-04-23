const person = {
    name: "John",
    pet: {
        name: "Buster",
        species: "canine"
    }
}



const { name: personName } = person;
const { pet: { name: petName } } = person;

console.log(petName);



const colors = [
    "blue",
    "red",
    "yellow"
]

const randomColor = colors[Math.floor(Math.random()*colors.length)];

console.log(randomColor)