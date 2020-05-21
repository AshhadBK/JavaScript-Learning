var count = 0;

for (count = 0; count <= 6; count++) {
  document.querySelectorAll(".drum")[count].addEventListener("click", handleClick);
}


// This Function Handles Mouse Click
function handleClick() {

  var buttonInnerHtml = this.innerHTML;
  makeSound(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);
}

// This Function Handles Key Presses
document.addEventListener("keypress",handleKeyPress);

function handleKeyPress(){
  makeSound(event.key);
  buttonAnimation(event.key);
}



// This is the Main Function
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(ButtonInnerHtml);

  }
}

function buttonAnimation(currentKey){

var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed");

setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);

}
