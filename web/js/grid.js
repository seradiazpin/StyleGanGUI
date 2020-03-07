generate_grid();
eel.expose(grid);
function grid() {
    eel.generate_grid();
    var timestamp = new Date().getTime();
    var el = document.getElementById("grid");
    el.src = "/images/generated/grid.png?t=" + timestamp;
}