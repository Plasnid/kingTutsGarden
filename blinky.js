//object describing an eye
let eye = {eyeWetness = .2, eyeColour: "brown", eyeOpen: true};

//function checks moisture level of eye,  if less than 0.5 it is dry
function isEyeDry(eyeMoisture){
    if(eyeMoisture <= 0.5){
        return true;
    }
    return false;
}
//function to close your eye lid, will console log a statement
function closeLid(){
    console.log("closing eye")
}
//function to open your eye lid, will console log a statement
function openLid(){
    console.log("opening eye");
}
//calls closelid and open lid, then updates eye wetness
function blink(){
    closeLid();
    openLid();
    eye.eyeWetness=1;
    console.log("I have blinked and it was great!");
}
//initializes eye blink program, calls for dryness value
(function doINeedToBlink(){
    let isDry = isEyeDry(eye.eyeWetness);
    if(isDry==true){
        blink();
    }else{
        console.log("my eye is fine...no blinking required");
    }
})()