
const buttonUpA = document.querySelector("#upPosA");
const buttonUpB = document.querySelector("#upPosB");

const turnoActualPartida = document.querySelector("#turnoActualPartida");
const numTurnosPartida = document.querySelector("#numTurnosPartida");
const divDadoCara = document.querySelector("#divDadoCara");

let moviendo = false;
let partidaTerminada = false;

const fichaA = {
    casilla: 0,
    letra: "A",
    ficha: document.querySelector("#fichaA")
};

const fichaB = {
    casilla: 0,
    letra: "B",
    ficha: document.querySelector("#fichaB")
};

const partida = {
    turnos: 0,
    turnoActual: "A"
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


function retro(ficha) {
    if (ficha.casilla <= 0) {
        return;
    }

    ficha.casilla--;

    const posicion = tablero[ficha.casilla].fichas[ficha.letra];

    ficha.ficha.style.left = posicion.x;
    ficha.ficha.style.top = posicion.y;
}


function moverRecur(ficha, movimientos, fin) {

    if (movimientos === 0) {
        fin();
        return;
    }

    if (movimientos > 0) {
        avanza(ficha);
        movimientos--;
    } else {
        retro(ficha);
        movimientos++;
    }

    setTimeout(() => {
        moverRecur(ficha, movimientos, fin);
    }, 500);
}


function puedesAvanzar(ficha, num) {
    return ficha.casilla + num <= 36;
}

function activarCasilla(ficha, salida) {

    const casillaActual = tablero[ficha.casilla];

    if (casillaActual.evento === "pregunta") {

        const divPregunta = document.querySelector("#divPregunta");

        const numPreg = Math.floor(Math.random() * 50) + 1;
        const preguntaActu = preguntas.find(p => p.id === numPreg);

        divPregunta.classList.remove("hidden");

        let html = "";

        for (let i = 0; i < 4; i++) {
            html += `
                <button
                    class="btnRespuesta"
                    data-respuesta="${i}">
                    ${preguntaActu.opciones[i]}
                </button>
            `;
        }

        divPregunta.innerHTML = `
            <div class="pregunta">
                <h3>${preguntaActu.pregunta}</h3>
                <div class="respuestas">
                    ${html}
                </div>
                <p id="resultado"></p>
            </div>
        `;

        const botones = divPregunta.querySelectorAll(".btnRespuesta");
        const resultado = divPregunta.querySelector("#resultado");

        botones.forEach(boton => {

            boton.addEventListener("click", () => {

                if (botones[0].disabled) return;

                const indiceSeleccionado = Number(boton.dataset.respuesta);
                const respuestaSeleccionada =
                    preguntaActu.opciones[indiceSeleccionado];

                const correcta =
                    respuestaSeleccionada === preguntaActu.respuesta;

                botones.forEach(b => {
                    b.disabled = true;
                });

                if (correcta) {
                    resultado.textContent = "¡Correcto! 🎉";
                    resultado.style.color = "green";
                } else {
                    resultado.textContent =
                        `¡Incorrecto! La respuesta correcta es: ${preguntaActu.respuesta}`;
                    resultado.style.color = "red";
                }

                setTimeout(() => {

                    divPregunta.classList.add("hidden");

                    if (!correcta) {
                        retro(ficha);
                    }

                    if (ficha.casilla === 36 && correcta) {
                        partidaTerminada = true;
                        divPregunta.classList.remove("hidden");

                        divPregunta.innerHTML = `
                            <div id="divVictoria" class="overlay-victoria">
                                <div class="modal-victoria">
                                    <div class="icono-victoria">🏆</div>

                                    <h2>¡HAS GANADO!</h2>
                                    <h2>Jugador ${ficha.letra}</h2>

                                    <p id="mensajeVictoria">
                                        ¡Enhorabuena! Has completado el tablero.
                                    </p>

                                    <button id="btnVolverJugar">
                                        Volver a jugar
                                    </button>
                                </div>
                            </div>
                        `;
                    }

                    salida(correcta);

                }, 2000);

            });

        });

    } else {

        const posDestino = Number(casillaActual.evento);

        if (casillaActual.evento === "" || !Number.isFinite(posDestino)) {
            salida(true);
            return;
        }

        const movimientos = posDestino - ficha.casilla;

        moverRecur(ficha, movimientos, () => {
            salida(true);
        });

    }
}

function cambiarTurno() {

    partida.turnoActual =
        partida.turnoActual === "A" ? "B" : "A";

    turnoActualPartida.textContent = partida.turnoActual;
}

function finalizarTurno() {

    if (partidaTerminada) {
        return;
    }

    divDadoCara.innerHTML = "<span>Click</span>";
    moviendo = false;
}

divDadoCara.addEventListener("click", function() {

    if (moviendo || partidaTerminada) return;

    moviendo = true;

    partida.turnos++;
    numTurnosPartida.textContent = partida.turnos;

    const num = Math.floor(Math.random() * 6) + 1;

    let html = "";

    for (let i = 0; i < num; i++) {
        html += '<div class="punto"></div>';
    }

    divDadoCara.innerHTML = html;
    divDadoCara.className = `dado d${num}`;

    const ficha =
        partida.turnoActual === "A" ? fichaA : fichaB;

    if (puedesAvanzar(ficha, num)) {

        moverRecur(ficha, num, function() {

            activarCasilla(ficha, function(correcta) {

                if (partidaTerminada) {
                    return;
                }

                cambiarTurno();
                finalizarTurno();

            });

        });

    } else {

        setTimeout(() => {

            cambiarTurno();
            finalizarTurno();

        }, 1000);

    }

});

const btnVolverJugar = document.querySelector("#btnVolverJugar");

btnVolverJugar.addEventListener("click", reiniciarPartida);

function reiniciarPartida() {

    // Reiniciar las posiciones de las fichas
    fichaA.casilla = 0;
    fichaB.casilla = 0;

    // Colocar las fichas en la casilla inicial
    [fichaA, fichaB].forEach(ficha => {
        const posicion = tablero[0].fichas[ficha.letra];

        ficha.ficha.style.left = posicion.x;
        ficha.ficha.style.top = posicion.y;
    });

    // Reiniciar los datos de la partida
    partida.turnos = 0;
    partida.turnoActual = "A";

    numTurnosPartida.textContent = "0";
    turnoActualPartida.textContent = "A";

    // Desbloquear el dado y restablecer su apariencia
    moviendo = false;
    partidaTerminada = false;

    divDadoCara.innerHTML = "<span>Click</span>";
    divDadoCara.className = "dado";

    // Ocultar las ventanas de pregunta y victoria
    document.querySelector("#divPregunta").classList.add("hidden");
    document.querySelector("#divVictoria").classList.add("hidden");
}
