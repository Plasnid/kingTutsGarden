// single line comment is this

/* 
this is where multi line comments go!

What is a DOM:  Document Object Model


Keywords: Plant, cellphone, clock, pyramid

Tutankhamen Pharoh: The Green Thumbed Ruler

king tut is sleeping in his pyramid
his phone rings
he is outraged
someone says his plants are dying
he looks at the clock
he waters his plants
*/

//how to select things on a webpage
const myTitle = document.querySelector("h1");
console.log(myTitle);

let titlePart1 = "Tutankhamen Pharoh";
let titlePart2 = 'The Awesome Green Thumbed Ruler';
myTitle.innerText = `${titlePart1}: ${titlePart2}`;

//pharoahs sleep state
let isSleeping = true;



let pharoahPlants = [
    {plantName: "basil", colour:"green", needsWatering:true},
    {plantName: "rosemary", colour:"green", needsWatering:false},
    {plantName: "sweet millions tomatoes", colour:"orange", needsWatering:true},
    {plantName: "peppermint", colour:"green", needsWatering:false},
    {plantName: "cillantro", colour:"green", needsWatering:true},
    {plantName: "strawberries", colour:"red", needsWatering:true}
]

//number of plants
let numPlants = pharoahPlants.length;
console.log(`The Pharoah has ${numPlants} plants!`);
//the pharoahs first plant is:
console.log(pharoahPlants[0]);
//the pharoahs last plant is:
console.log(pharoahPlants[pharoahPlants.length - 1]);
let strawberries = pharoahPlants[pharoahPlants.length - 1];
console.log(strawberries.needsWatering);
console.log(strawberries["needsWatering"]);




