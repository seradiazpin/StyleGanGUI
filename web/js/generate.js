generate_new(seed1);
eel.expose(generate);
function generate() {
    let seed1 = document.getElementById('Seed1Generate').value
    eel.generate_new(seed1);
    var timestamp = new Date().getTime();
    var el = document.getElementById("gen");
    el.src = "/images/generated/generated.png?t=" + timestamp;
}