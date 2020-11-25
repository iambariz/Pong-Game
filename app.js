//Player variables

const p1 = document.getElementById("playerOne");
const p2 = document.getElementById("playerTwo");

let p1Y = 300;
let p2Y = 300;

let p1ToggleUp = false;
let p1ToggleDown = false;

let p2ToggleUp = false;
let p2ToggleDown = false;

p1.style.left = "40px";
p2.style.left = "750px";

//Ball variables

const ball = document.getElementById("ball");
let ballX = 0;
let ballY = 0;
let ballXSpeed = 0;
let ballYSpeed = 0;

//Key commands

document.addEventListener('keydown', function(e){
    if(e.key == 's'){p1ToggleDown = true  }
    if(e.key == "w"){p1ToggleUp = true  }
    if(e.key == 'ArrowDown'){p2ToggleDown = true  }
    if(e.key == "ArrowUp"){p2ToggleUp = true  }
})
document.addEventListener('keyup', function(e){
    if(e.key == "s"){p1ToggleDown = false  }
    if(e.key == "w"){p1ToggleUp = false  }
    if(e.key == "ArrowDown"){p2ToggleDown = false  }
    if(e.key == "ArrowUp"){p2ToggleUp = false  }
})

//Engine

function loop(){

    if(p1ToggleDown){ p1Y += 5;};
    if(p1ToggleUp){ p1Y -= 5;};
    if(p2ToggleDown){ p2Y += 5;};
    if(p2ToggleUp){ p2Y -= 5;};

    p1.style.top = p1Y-50+"px";
    p2.style.top = p2Y-50+"px";
    window.requestAnimationFrame(loop);
}

loop();

function placeBall(){
    ballX = 350;
    ballY = 50;
    
}