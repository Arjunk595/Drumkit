//1. logic for detecting click
//document.querySelectorAll(".drum").length will give us the " total number of drum buttons"
for (var i=0 ; i<document.querySelectorAll(".drum").length ; i++){
    
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        //what to do when click detected
        var btninnerHTML=this.innerHTML; //it will give the inner html of the button that gets clicked
        makesound(btninnerHTML);
        buttonAnimation(btninnerHTML);
    });
}

//2. logic for detecting keypress   
document.addEventListener("keypress",function(event){
    makesound(event.key);   //see the notebook to know more about this function
    buttonAnimation(event.key);
});
    
// function which will play sound according to keypress and click
function makesound(key){
    switch(key){
        case "w":
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "j":
            audio=new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log();
    }    
}

function buttonAnimation(currentKey){
    var activebtn=document.querySelector("." + currentKey);
    activebtn.classList.add("pressed");
    setTimeout(function(){
        activebtn.classList.remove("pressed");
    },100);
}

