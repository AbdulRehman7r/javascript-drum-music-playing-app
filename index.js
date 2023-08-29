function playSound(letter) {
  switch (letter) {
    case "w":
        new Audio("./sounds/crash.mp3").play();
      break;
    case "a":
        new Audio("./sounds/kick-bass.mp3").play();
      break;
    case "s":
        new Audio("./sounds/snare.mp3").play();
      break;
    case "d":
        new Audio("./sounds/tom-1.mp3").play();
      break;
    case "j":
        new Audio("./sounds/tom-2.mp3").play();
      break;
    case "k":
        new Audio("./sounds/tom-3.mp3").play();
      break;
    case "l":
        new Audio("./sounds/tom-4.mp3").play();
      break;
    default:
        console.log(letter)
  }
}

function animateDrum(letter){
    try{
        let elm  = document.querySelector(`.${letter}`)
        elm.classList.add("pressed")
        setTimeout(()=>{
          elm.classList.remove("pressed")
            },100)
    }catch(e){
        
    }
    
}


document.querySelectorAll(".drum").forEach((elm, key, list) => {
    elm.addEventListener("click", (e) => {
      let letter = elm.textContent;
      playSound(letter)
      animateDrum(letter)
    });
  });


document.addEventListener("keypress",(e)=>{
    let letter = e.key
    playSound(letter)
    animateDrum(letter)

})
