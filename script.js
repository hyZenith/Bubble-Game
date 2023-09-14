var score = 0;
let timer = 60;
var hitrn = 0;


function makeBubble() {
    var clutter = "";

    for (var i = 1; i < 168; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer(){
   var TimeInt =  setInterval(function() {
        if(timer>0){
             timer--;
        document.querySelector("#Timerval").textContent = timer;
        }
        else{
            clearInterval(TimeInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
        }
    }, 1000);   
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn;
}


function IncreaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
    var clickedNumber = Number(dets.target.textContent)
    if(clickedNumber === hitrn){
        IncreaseScore(); 
        makeBubble();
        getNewHit();
    }
})



getNewHit();
runTimer();
makeBubble();