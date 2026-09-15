const divM = document.querySelector("#divMostrar");
const divF = document.querySelector("#divFuncion");
const divE = document.querySelector("#divEstado");

const pMM = document.querySelector("#pMM");
let tablaMulti = document.querySelector("#tablaMulti");

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


const num = document.querySelector("#numMM");

function comprobarNum() {

    tablaMulti.innerHTML = "";

    const num = Number(document.querySelector("#numMM").value);

    if(num < 1) {
        pMM.innerHTML= "El número ha de ser més gran que 0";
    } else if(num > 10) {
        pMM.innerHTML= "El número ha de ser més petit que 11";
    } else {
            
            
        let lin = '';
        for (let i = 1; i <= 10; i++) {
            lin += `<tr><td class="f">${num} * ${i}</td><td>${num*i}</td></tr>`;
        }

        html = `
            ${lin}
        `;

        tablaMulti.innerHTML = html;
    }

}

numMM.addEventListener("change", comprobarNum);




let estado = "inicio";
// let estado = "turnoA";
// let estado = "turnoB";
// let estado = "final";

let html = "";

function cambioEstado() {
    switch(estado) {
        case "inicio":
            html = "Inicio de la partida!";
            break;
        case "turnoA":
            html = "Es el torn del jugador A";
            break;
        case "turnoB":
            html = "Es el torn del jugador B";
            break;
        case "final":
            html = "Final de la partida!";
            break;
    }
    divE.innerHTML = html;
}

cambioEstado();