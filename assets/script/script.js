const value1 = document.getElementById("band1");
const value2 = document.getElementById("band2");
const valueMulti = document.getElementById("multi");
const valueTol = document.getElementById("tol");
const resultScreen = document.getElementById("result");

function result() {
    var band1 = value1.value;
    var band2 = value2.value;
    var multiplier = valueMulti.value;
    var tolerance = valueTol.value;
    var band12 = band1+band2;
    var final =band12+multiplier;

    resultScreen.innerHTML = `Result here : ${final} ohm ±${tolerance}`;
}