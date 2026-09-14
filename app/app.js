const divM = document.querySelector("#divMostrar");
const divF = document.querySelector("#divFuncion");

let player = "Joel Caballero";
const MAX_TIRADAS = 3;

divM.innerHTML += "Bienvenido, "+player+" tienes "+ MAX_TIRADAS +" tiradas<br>";
player = "Pepe";
divM.innerHTML += "Bienvenido, "+player+" tienes "+ MAX_TIRADAS +" tiradas<br>";


const subFun = document.querySelector("#subFuncion");

function SOperacion (){

    const operacion = document.querySelector("#selectFuncion").value;

    const num1 = Number(document.querySelector("#numA").value);
    const num2 = Number(document.querySelector("#numB").value);

    let result;

    switch(operacion) {
        case "sumar": result = num1+num2; break;
        case "restar": result = num1-num2; break;
        case "multi": result = num1*num2; break;
        case "divi": result = num1/num2; break;
    }
    
    const res = document.querySelector("#pRes");

    res.innerHTML = "Resultado: "+ result;


}

subFun.addEventListener("click", SOperacion);

