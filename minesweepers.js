function load_webpage() {
    document.getElementById("play-button-container").style.display = "Block";
    document.getElementById("game-screen").style.display = "None";
    console.log("Page initialized :)))");
}

let x = 0;
let y = 0;
let drag = false;
let down = false;

function launch_game() {
    document.getElementById("play-button-container").style.display = "None";
    var screen = document.getElementById("game-screen");
    screen.style.display = "Block";
    screen.addEventListener("mousedown", mousedown);
    screen.addEventListener("mousemove", mousemove);
    screen.addEventListener("mouseup", mouseup)
    console.log("Game launched uwu");

    document.getElementById("coordinates").textContent = x + " " + y;
    document.getElementById("origin").style.top = 400;
    document.getElementById("origin").style.left = y;
}

function mousedown() {
    drag = false;
    down = true;
}

function mousemove(event) {
    drag = true;
    if (down) {
        x -= event.movementX;
        y += event.movementY;
        document.getElementById("coordinates").textContent = x + " " + y;
        document.getElementById("origin").style.top = y;
        console.log(document.getElementById("origin").style.top);
        console.log(x);
        document.getElementById("origin").style.left = x;
    }
}

function mouseup() {
    down = false;
    if (drag) {
        console.log("drag performed");
    } else {
        console.log("click performed");
    }
}