
for (i= 0 ; i<document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    doOnPress(this.innerHTML);
  });
}

document.addEventListener("keydown", function(event){
  doOnPress(event.key);
});

function playCrash(){
  var audio = new Audio('sounds/crash.mp3');
  audio.play();
}

function playKick(){
  var audio = new Audio('sounds/kick-bass.mp3');
  audio.play();
}

function playSnare(){
  var audio = new Audio('sounds/snare.mp3');
  audio.play();
}

function playTom1(){
  var audio = new Audio('sounds/tom-1.mp3');
  audio.play();
}

function playTom2(){
  var audio = new Audio('sounds/tom-2.mp3');
  audio.play();
}

function playTom3(){
  var audio = new Audio('sounds/tom-3.mp3');
  audio.play();
}

function playTom4(){
  var audio = new Audio('sounds/tom-4.mp3');
  audio.play();
  document.getElementById("tom4").classList.add("pressed");
  setTimeout(() => {
document.getElementById("tom4").classList.remove("pressed");
}, "1000");

}

function doOnPress(key)
{
    //alert("I got clicked")
    console.log(key);
    switch(key) {
      case "w":
          playCrash();
          break;
      case "a":
        playKick();
        break;
      case "s":
        playSnare();
        break;
      case "d":
        playTom1();
        break;
      case "j":
        playTom2();
        break;
      case "k":
        playTom3();
        break;
      case "l":
        playTom4();
        break;
      default:
        break;
    }
}
