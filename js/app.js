let cronometro;
let milisegundos = 0;

function play() {
    cronometro = setInterval(function () {
        milisegundos += 10; // Incrementar en 10 para centésimos de segundo
        actualizarTiempo();
    }, 10); // Intervalo de 10 milisegundos para centésimos de segundo

    botonesRuning();
}

function pause() {
    clearInterval(cronometro);
    botonesPaused();
}

function reset() {
    milisegundos = 0;
    clearInterval(cronometro);
    actualizarTiempo();
    botonesStopped();
}

function actualizarTiempo() {
    const minutos = Math.floor(milisegundos / (1000 * 60));
    const segundos = Math.floor((milisegundos % (1000 * 60)) / 1000);
    const centesimos = (milisegundos % 1000) / 10;

    const time = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')},${Math.floor(centesimos).toString().padStart(2, '0')}`

    document.getElementById('numeros').innerText = time;
}

function playAgain(){
    play();
}

const botonesRuning = () =>{
    const section = document.getElementById('contendorBotones');
    section.innerHTML = '<button id="buttonReset" class="btn btn-danger mx-2" onclick="reset()"><i class="fa-solid fa-rotate-left"></i></button> <button id="buttonPause" class="btn btn-dark mx-2" onclick="pause()"><i class="fa-solid fa-pause"></i></button>'
}

const botonesStopped = () =>{
    const section = document.getElementById('contendorBotones');
    section.innerHTML = '<button id="buttonPlay" class="btn btn-success mx-2" onclick="play()"><i class="fa-solid fa-play"></i></button>'
}

const botonesPaused = () =>{
    const section = document.getElementById('contendorBotones');
    section.innerHTML = '<button id="buttonReset" class="btn btn-danger mx-2" onclick="reset()"><i class="fa-solid fa-rotate-left"></i></button> <button id="buttonPlayAgain" class="btn btn-dark mx-2" onclick="playAgain()"><i class="fa-solid fa-play"></i></button>'
}

document.getElementById('btnIniciar').addEventListener('click', play);
document.getElementById('btnPausar').addEventListener('click', pause);
document.getElementById('btnReset').addEventListener('click', reset);
document.getElementById('btnPlayAgain').addEventListener('click', playAgain);
