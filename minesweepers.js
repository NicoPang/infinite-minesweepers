function load_webpage() {
    document.getElementById("play-button-container").style.display = "Block";
    document.getElementById("game-screen").style.display = "None";
    console.log("Page initialized :)))");
}

function launch_game() {
    document.getElementById("play-button-container").style.display = "None";
    var screen = document.getElementById("game-screen");
    screen.style.display = "Block";
    screen.addEventListener("click", get_coordinates);
    console.log("Game launched uwu");
}

function get_coordinates(event) {
    console.log("clicked" + event.clientX + " " + event.clientY);
}