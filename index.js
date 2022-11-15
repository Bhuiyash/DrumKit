for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  // var tomno=i ;
  // var newSource="sounds/tom-"+tomno+".mp3";
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttoninnerhtml = this.innerHTML;
    forsound(buttoninnerhtml);
  });


}

document.addEventListener("keydown", function() {
  forsound(event.key);

});


function forsound(key) {
  switch (key) {
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
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    default:

  }

}
