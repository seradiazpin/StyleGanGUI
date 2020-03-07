generate_trick();
eel.expose(trick);      
function trick() {
    eel.generate_trick();
    var timestamp = new Date().getTime();
    var el = document.getElementById("trick");
    el.src = "/images/generated/trick.png?t=" + timestamp;
}