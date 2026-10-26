const buttonUpA = document.querySelector("#upPosA");
const buttonUpB = document.querySelector("#upPosB");

const turnoActualPartida = document.querySelector("#turnoActualPartida");
const numTurnosPartida = document.querySelector("#numTurnosPartida");

let moviendo = false;

let divDadoCara = document.querySelector("#divDadoCara");

const fichaA = {
    "casilla": 0,
    "letra": "A",
    "ficha": document.querySelector("#fichaA")
};

const fichaB = {
    "casilla": 0,
    "letra": "B",
    "ficha": document.querySelector("#fichaB")
};

const partida = {
    "turnos": 0,
    "turnoActual": "A"
};

function avanza(ficha) {
    if (ficha.casilla >= tablero.length - 1) {
        return;
    }

    ficha.casilla++;

    const posicion = tablero[ficha.casilla].fichas[ficha.letra];

    ficha.ficha.style.left = posicion.x;
    ficha.ficha.style.top = posicion.y;
}

divDadoCara.addEventListener("click", function() {

    if (moviendo) return;

    moviendo = true;

    partida.turnos++;
    numTurnosPartida.textContent = partida.turnos;

    let num = Math.floor((Math.random() * 6) + 1);
    let html = '';

    for (let i = 0; i < num; i++) {
        html += '<div class="punto"></div>';
    }

    divDadoCara.innerHTML = html;
    divDadoCara.className = `dado d${num}`;

    let ficha = partida.turnoActual === "A" ? fichaA : fichaB;

    if (puedesAvanzar(ficha, num)) {

        avanceRecur(ficha, num, function() {

            cambiarTurno();

            finalizarTurno();

            if(ficha.casilla==36) {
                // Comprueba si gana
                // Si gana hay que marcar quien ha ganado y reiniciar la partida
            }
        });

    } else {

        setTimeout(() => {

            cambiarTurno();
            finalizarTurno();

        }, 1000);
    }

});

function avanceRecur(ficha, num, fin) {

    if (num <= 0) {
        fin();
        return;
    }

    avanza(ficha);

    setTimeout(() => {
        avanceRecur(ficha, num - 1, fin);
    }, 500);
}

function puedesAvanzar(ficha, num) {
    if ((ficha.casilla + num) > 36) {
        return false;
    }

    return true;
}

function cambiarTurno() {
    partida.turnoActual =
        partida.turnoActual === "A" ? "B" : "A";

    turnoActualPartida.textContent = partida.turnoActual;
}

function finalizarTurno() {
    divDadoCara.innerHTML = "<span>Click</span>";
    moviendo = false;
}