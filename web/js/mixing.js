mixing(seed1, seed2, styles);
eel.expose(mix);               // Expose this function to Python
function mix() {
    let seed1 = document.getElementById('Seed1Mix').value
    let seed2 = document.getElementById('Seed2Mix').value

    let stylesLayers = []
    for (let index = 0; index < 10; index++) {
        let id = 'style' + index;
        console.log(id);
        let styles = document.getElementById(id).checked
        console.log(styles);

        if (styles) {
            stylesLayers.push(index);
        }
    }
    if (stylesLayers.length == 0) {
        stylesLayers = [5]
    }
    console.log(stylesLayers);

    eel.mixing(seed1, seed2, stylesLayers);  // Call a Python function
    var timestamp = new Date().getTime();
    var el = document.getElementById("mix");
    el.src = "/images/generated/mixin.png?t=" + timestamp;
}