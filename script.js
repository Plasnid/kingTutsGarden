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
    {plantName: "basil", colour:"green", minMoisture:0.7 ,soilCondition:0.6},
    {plantName: "rosemary", colour:"green", minMoisture: 0.3, soilCondition:0.6},
    {plantName: "sweet millions tomatoes", minMoisture: 0.9, colour:"orange", soilCondition:0.8},
    {plantName: "peppermint", colour:"green", minMoisture: 0.2, soilCondition:0.3},
    {plantName: "cillantro", colour:"green", minMoisture: 0.8, soilCondition:0.5},
    {plantName: "strawberries", colour:"red", minMoisture: 0.1, soilCondition:0.09}
]

function waterPlants(plant){
    if(plant.soilCondition<plant.minMoisture){
        console.log(`${plant.plantName} needs watering`);
    }else{
        console.log(`${plant.plantName} doesn't need watering`);
    }
}

for(let i=0; i<pharoahPlants.length; i++){
    waterPlants(pharoahPlants[i]);
}


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

console.log(1=="1");
console.log(1==="1");
console.log(1===1);




