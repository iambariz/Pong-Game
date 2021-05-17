//Game variables

const welcomeMsgDisplay = document.getElementById("welcome-msg");


//Player variables

const p1 = document.getElementById("playerOne");
const p2 = document.getElementById("playerTwo");
const p1ScoreDisplay = document.getElementById("playerOneScore");
const p2ScoreDisplay = document.getElementById("playerTwoScore");

let p1Score = 0;
let p2Score = 0;

p2ScoreDisplay.textContent = p2Score;
p1ScoreDisplay.textContent = p1Score;

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
ballX = 350;
ballY = 50;
let ballXSpeed = 0;
let ballYSpeed = 0;

//Key commands

document.addEventListener('keydown', function (e) {
    if (e.key == 's') {
        p1ToggleDown = true
    }
    if (e.key == "w") {
        p1ToggleUp = true
    }
    if (e.key == 'ArrowDown') {
        p2ToggleDown = true
    }
    if (e.key == "ArrowUp") {
        p2ToggleUp = true
    }
})
document.addEventListener('keyup', function (e) {
    if (e.key == "s") {
        p1ToggleDown = false
    }
    if (e.key == "w") {
        p1ToggleUp = false
    }
    if (e.key == "ArrowDown") {
        p2ToggleDown = false
    }
    if (e.key == "ArrowUp") {
        p2ToggleUp = false
    }
})

//Engine

function loop() {

    if (p1ToggleDown) {
        p1Y += 5;
    };
    if (p1ToggleUp) {
        p1Y -= 5;
    };
    if (p2ToggleDown) {
        p2Y += 5;
    };
    if (p2ToggleUp) {
        p2Y -= 5;
    };
    ballX += ballXSpeed;
    ballY += ballYSpeed;


    if (p1Y < 50) {
        p1Y = 50;
    }
    if (p1Y > 550) {
        p1Y = 550;
    }

    if (p2Y < 50) {
        p2Y = 50;
    }
    if (p2Y > 550) {
        p2Y = 550;
    }



    if (ballY < 0 || ballY > 600) {
        ballYSpeed = -ballYSpeed
    };

    if (ballX < 0 && (ballX > -5 || ballX >= ballXSpeed - 5) && Math.abs(ballY - p1Y) <= 55) {
        ballX = 0;
        ballXSpeed = -ballXSpeed * 1.1;
        ballYSpeed *= 1.1;
    }

    if (ballX < -50) {
        p2Score++;
        p2ScoreDisplay.textContent = p2Score;
        placeBall();
    };


    if (ballX > 700 && (ballX < 705 || ballX - 700 >= ballXSpeed - 5) && Math.abs(ballY - p2Y) <= 55) {
        ballX = 700;
        ballXSpeed = -ballXSpeed * 1.1;
        ballYSpeed *= 1.1;
    }

    if (ballX > 750) {
        p1Score++;
        p1ScoreDisplay.textContent = p1Score;
        placeBall();
    };

    p1.style.top = p1Y - 50 + "px";
    p2.style.top = p2Y - 50 + "px";
    ball.style.left = ballX - 5 + 50 + "px";
    ball.style.top = ballY - 5 + "px";
    window.requestAnimationFrame(loop);
}

loop();


function placeBall(time = 2000) {
    ballXSpeed = 0;
    ballYSpeed = 0;
    ballX = 350;
    ballY = 50;
    setTimeout(function () {
            ballXSpeed = (Math.random() * 3 + 2) * (Math.round(Math.random()) * 2 - 1);
            ballYSpeed = (Math.random() * 3 + 2) * (Math.round(Math.random()) * 2 - 1);
        },
        time);
}

document.addEventListener('keyup', event => {
    if (event.key === ' ') {
        welcomeMsgDisplay.style.display = "none";
        placeBall(0);
    }
})