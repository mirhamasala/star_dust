// Random Colors JS

el.style.backgroundColor = getColor();

function getColor() {
    function color() {
        let hex = rand(255).toString(16);
        return ("0" + String(hex)).substr(-2);
    }
    return "#"+color()+color()+color();
}
