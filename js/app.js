// ============================================================
//  TAREA — Videojuego: Piedra, Papel o Tijera
//  Tu código va en este archivo.
//  Leé el README.md para entender los requisitos.
// ============================================================

const reset = document.getElementById('btnReset')
const puntajeEmpate = document.getElementById('puntajeEmpate')
const puntajeJugador = document.getElementById('puntajeJugador')
const puntajePC = document.getElementById('puntajePC')
const resultado = document.getElementById('resultado')

function jugar(eleccionJugador) {
    let resultado = document.getElementById("eleccionJugador")
    resultado.textContent = eleccionJugador

    let eleccionMaquina = jugarMaquina()
    resultadoDeLaRonda(eleccionJugador, eleccionMaquina)
    
}

function jugarMaquina() {
    let opciones = ['🪨', '📄', '✂️'];
    let eleccionMaquina = opciones[Math.floor(Math.random() * opciones.length)];;

    let resultado = document.getElementById("eleccionPC");
    resultado.textContent = eleccionMaquina;

    return eleccionMaquina
}

let contadorJugador = 0
let contadorEmpate = 0
let contadorPC = 0

function resultadoDeLaRonda(eleccionJugador, eleccionMaquina) {
    if(eleccionJugador == '✂️') {
        if((eleccionMaquina == '🪨')) {
            resultado.textContent = 'Perdiste'
            contadorPC++
            puntajePC.textContent = contadorPC
        }
        else if ((eleccionMaquina == '📄')) {
            resultado.textContent = 'Ganaste'
            contadorJugador++
            puntajeJugador.textContent = contadorJugador
        }
        else if ((eleccionMaquina == '✂️')){
            resultado.textContent = 'Empate'
            contadorEmpate++
            puntajeEmpate.textContent = contadorEmpate
        }        
    }
    else if (eleccionJugador == '🪨') {
        if((eleccionMaquina == '📄')) {
            resultado.textContent = 'Perdiste'
            contadorPC++
            puntajePC.textContent = contadorPC
        }
        else if ((eleccionMaquina == '✂️')) {
            resultado.textContent = 'Ganaste'
            contadorJugador++
            puntajeJugador.textContent = contadorJugador
        }
        else if ((eleccionMaquina == '🪨')){
            resultado.textContent = 'Empate'
            contadorEmpate++
            puntajeEmpate.textContent = contadorEmpate
        }
    }
    else {
        if((eleccionMaquina == '✂️')) {
            resultado.textContent = 'Perdiste'
            contadorPC++
            puntajePC.textContent = contadorPC
        }
        else if ((eleccionMaquina == '🪨')) {
            resultado.textContent = 'Ganaste'
            contadorJugador++
            puntajeJugador.textContent = contadorJugador
        }
        else if ((eleccionMaquina == '📄')){
            resultado.textContent = 'Empate'
            contadorEmpate++
            puntajeEmpate.textContent = contadorEmpate
        }
    }
}

reset.addEventListener('click', () => {
    contadorEmpate = 0
    contadorJugador = 0
    contadorPC = 0
    
    puntajeEmpate.textContent = contadorEmpate
    puntajeJugador.textContent = contadorJugador
    puntajePC.textContent = contadorPC
})
