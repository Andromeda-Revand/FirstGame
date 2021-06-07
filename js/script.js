var character = document.getElementById("character");
var block = document.getElementById("block");
let score = 0;
let game = true

function scoren(){
    score++;
    document.getElementById("score").innerHTML = score;
}

window.setInterval(scoren, 10);

function mulai(){

}

function jump(){
    if (character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}

var ded = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert('HAHA DIED LOL BRRR WOOOO\nTip: refresh page for restart');
    }
}, 10);