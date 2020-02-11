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
    {plantName: "basil", colour:"green", minMoisture:0.7 ,soilCondition:0.6, isHardy:false},
    {plantName: "rosemary", colour:"green", minMoisture: 0.3, soilCondition:0.6, isHardy: true},
    {plantName: "sweet millions tomatoes", minMoisture: 0.9, colour:"orange", soilCondition:0.8, isHardy: true},
    {plantName: "peppermint", colour:"green", minMoisture: 0.2, soilCondition:0.3, isHardy:false},
    {plantName: "cillantro", colour:"green", minMoisture: 0.8, soilCondition:0.5, isHardy:false},
    {plantName: "strawberries", colour:"red", minMoisture: 0.1, soilCondition:0.09, isHardy: true}
]

//this is a function expression
let wateringCan = function(plant){
    console.log("inside of wateringCan");
    console.log(plant);
    plant.soilCondition +=0.5;
    console.log(plant);

}

function nonHardyWatering(minWater, soilWater){
    console.log("nonHardyWatering has been called");
    //min water is the amount of water the plant needs

    //soil water is the amount of water the plan has

    return minWater-soilWater;
}

function waterPlants(plant){
    if(plant.soilCondition<plant.minMoisture && plant.isHardy==true){
        console.log(`${plant.plantName} needs watering`);
        wateringCan(plant);
    }else if(plant.soilCondition<plant.minMoisture && plant.isHardy==false){
        console.log(`${plant.plantName} is not hardy, water carefully`);
        let waterAmount = nonHardyWatering(plant.minMoisture, plant.soilCondition);
        console.log(`basil needs: ${waterAmount}`);
        plant.soilCondition +=waterAmount;
        console.log(`${plant.plantName}: ${plant.soilCondition}`);
    }else{
        console.log(`${plant.plantName} doesn't need watering`);
    }
}


let pharoahsMood = (function(){
    const mainBody = document.querySelector("body");
    console.log(mainBody);
    const moodPhrase = document.createElement("h2");
    moodPhrase.innerText = "The Pharoah is Maaaaaaaaaaaaad!";
    mainBody.appendChild(moodPhrase);
})();

function forwardsAndBackwards(){
    let plantLength = pharoahPlants.length;
    //for loop for(startingNumber, endingNumber, ++ or --){instructions}
    //going forwards through the array
    console.log("going forwards through the plants");
    for(let i=0;i<plantLength;i++){
        console.log(`${i}:${pharoahPlants[i].plantName}`);
    }
    //going backwards through the array
    for(let i=plantLength-1;i>=0;i--){
        console.log(`${i}:${pharoahPlants[i].plantName}`);
    }

}

function pharoahFridaySong(){
    console.log("I don't care if mondays blue");
    console.log("tuesdays grey and wednesday too");
    console.log("thursday I don't care about you");
    console.log("its friday!  I'm in love!");
}

//generator

function * eagles(){
    yield "on a dark desert highway";
    yield "cool wind in my hair";
    yield "warm smell of colitas";
    yield "rising up through air";
}

(function starter(){
    for(let i=0; i<pharoahPlants.length; i++){
        waterPlants(pharoahPlants[i]);
    }
    forwardsAndBackwards();
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
    pharoahFridaySong();
    let pharoahHotel = eagles();
    console.log(pharoahHotel.next().value);
    console.log(pharoahHotel.next().value);
    console.log(pharoahHotel.next().value);
    console.log(pharoahHotel.next().value);
    //generator taking data from an array
    let paintItBlack = [
        "I see a red door",
        "and I want it painted black",
        "not colour anymore",
        "I want to paint it black",
        "I see the girls walk by dressed in their summer clothes",
        "I have to turn my head until the darkness goes"
    ]
    /**generator with an array */
function* stepGen(steps){
    let index = 0;
    while (true) {
        yield steps[index];
        index = (index+1)%steps.length;
    }
}
let stones = stepGen(paintItBlack); // pass array to make it more reusable
    console.log(stones.next().value); 

console.log("\n\n lets try it another way using yeild*");
function* showSong(steps){
    while (true) yield* steps;
}
let sixtiesSong = showSong(paintItBlack)
console.log(sixtiesSong.next().value); 
console.log(sixtiesSong.next().value);
console.log(sixtiesSong.next().value);
console.log(sixtiesSong.next().value);
console.log(sixtiesSong.next().value);
console.log(sixtiesSong.next().value);
console.log("what happens when we hit the end of our array? we yield to the array");
console.log(sixtiesSong.next().value);

})()




console.log(1=="1");
console.log(1==="1");
console.log(1===1);

//Arrays are superheroes!
//the pharoah is hungry and he wants california rolls
//cucumber, avocado, crab, rice, nori, flying fish eggs

let caliRoll = [];
caliRoll.push("rice");
caliRoll.unshift("nori");
caliRoll.push("cucumber");
caliRoll.push("flying fish eggs");
caliRoll.push("crab");
caliRoll.push("avocado");
//start adding odd ingredients
caliRoll.unshift("dark chocolate");
caliRoll.push("gummies");
console.log(caliRoll.length);
console.log(caliRoll);
//get rid of the last element, the gummies
caliRoll.pop();
console.log(caliRoll);
//get rid of the firset element, dark chocolate
caliRoll.shift()
console.log(caliRoll);
//switching flying fish eggs with frog eggs
caliRoll.splice(3,1,"frog eggs");
console.log(caliRoll)





