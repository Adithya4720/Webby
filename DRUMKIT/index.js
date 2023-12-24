var numofbuttons = document.querySelectorAll(".drum").length;
function animate(key){
    var activebutton = document.querySelector("."+key);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);
}
for(var i=0;i<numofbuttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("keypress", function(event){
        makesound(event.key);
        animate(event.key);
        });

    function makesound(hey){
        switch(hey){
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            default:
                console.log(this.innerHTML);    
    };
    }
    }

