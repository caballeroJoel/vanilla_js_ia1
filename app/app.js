const divM = document.querySelector("#divMostrar");
const divF = document.querySelector("#divFuncion");
const divE = document.querySelector("#divEstado");
const divC = document.querySelector("#divCambio");
const divD = document.querySelector("#divDado");
const divFP = document.querySelector("#divFormPlayer");
const divCas = document.querySelector("#divCasillas");
const divTab = document.querySelector("#divTablero");

/////////////////////////////////////////////////////

const pMM = document.querySelector("#pMM");
let tablaMulti = document.querySelector("#tablaMulti");

let player = "Joel Caballero";
const MAX_TIRADAS = 3;

divM.innerHTML += "Bienvenido, "+player+" tienes "+ MAX_TIRADAS +" tiradas<br>";
player = "Pepe";
divM.innerHTML += "Bienvenido, "+player+" tienes "+ MAX_TIRADAS +" tiradas<br>";

///////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////

const spanC = document.querySelector("#spanChange");

spanC.addEventListener("click", function() {
    spanC.textContent = "Me has presionado!!"
    spanC.classList.toggle("tog");
});

///////////////////////////////////////////////////////

let divDadoCara = document.querySelector("#divDadoCara");

divDadoCara.addEventListener("click", function() {
    let num = Math.floor((Math.random() * 6) + 1);
    let html = '';
    
    for (let i = 0; i < num; i++) {
        html += '<div class="punto"></div>';
    }
    
    divDadoCara.innerHTML = html;
    divDadoCara.className = `dado d${num}`;
    
    moverCasilla(num);

});

///////////////////////////////////////////////////////

let subNamePlayer = document.querySelector("#subNamePlayer").addEventListener("click", function(e) {
    e.preventDefault();

    let name = document.querySelector("#namePlayer").value;
    let hello = document.querySelector("#helloPlayer");

    hello.textContent = `Juagdor 1, ${name}`;

});

///////////////////////////////////////////////////////

const caselles = ["Start", "Poble", "Casa", "Bosc", "Mola", "Final"];

function moverCasilla(num) {
    let casilla = document.querySelector("#casilla");
    casilla.textContent = "Has caido en: " + caselles[num-1];

    jugadores[0].posicion+=num;
    console.log(jugadores[0]);
}

///////////////////////////////////////////////////////

const preguntas = [
    {
        pregunta: "Raíz cuadrada de 121?",
        respuestas: ["15", "11", "12"],
        correcta: "11"
    },
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        respuestas: ["Amazonas", "Nilo", "Misisipi"],
        correcta: "Amazonas"
    },
    {
        pregunta: "¿En qué año llegó el ser humano a la Luna?",
        respuestas: ["1975", "1959", "1969"],
        correcta: "1969"
    },
    {
        pregunta: "¿Cuál es el océano más grande del planeta?",
        respuestas: ["Océano Atlántico", "Océano Pacífico", "Océano Índico"],
        correcta: "Océano Pacífico"
    },
    {
        pregunta: "¿Quién pintó la Mona Lisa?",
        respuestas: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci"],
        correcta: "Leonardo da Vinci"
    },
    {
        pregunta: "¿Cuál es el planeta más grande del sistema solar?",
        respuestas: ["Saturno", "Júpiter", "Marte"],
        correcta: "Júpiter"
    }
];

let disPregunta = document.querySelector("#disPregunta");
let numPreg = 0;

function displayPregunta() {
    let html = "";
    let html1 = "";

    for (let i = 0; i < 3; i++) {
        html1 += `<button class="respPreg" value="${preguntas[numPreg].respuestas[i]}">${preguntas[numPreg].respuestas[i]}</button>`;
    }

    html = `
        <p>${preguntas[numPreg].pregunta}</p>
        ${html1}
    `;

    disPregunta.innerHTML = html;
}

disPregunta.addEventListener("click", function(e) {
    if (e.target.classList.contains("respPreg")) {
        let respuestaPregunta = document.querySelector("#respuestaPregunta");
        if(e.target.value == preguntas[numPreg].correcta) {
            respuestaPregunta.textContent = "Has acertado.";
        } else {
            respuestaPregunta.textContent = "Respuesta incorrecta.";
        }
    }
});

let nextQ = document.querySelector("#nextQ").addEventListener("click", function() {
    numPreg++;
    if(numPreg==5) {
        numPreg=0;
    }
    let respuestaPregunta = document.querySelector("#respuestaPregunta").textContent="";
    displayPregunta();
});

displayPregunta();

///////////////////////////////////////////////////////

const tablero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function renderTablero(){
    let html = '<table border="1" class="tablero"><tr>';
    for(let i=0; i<tablero.length; i++){
        html+= `
            <td>
                <p>${i}</p>
            </td>
        `;
    }
    html+="</tr></table>";

    divTab.innerHTML = html;

};



///////////////////////////////////////////////////////

let jugadores = [
    {
        name: "",
        posicion: 0,
        activo: true
    }
];




renderTablero();