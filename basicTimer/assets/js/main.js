const criaData = (segundos) => {
    const data = new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'UTC'});
}

const atualizaFrontend = (tempo, cor) => {
    texto = criaData(tempo)
    relogio.innerHTML = texto;
    relogio.style.color = cor;
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

iniciar.addEventListener('click', (event) => {
    clearInterval(timer);
    timer = setInterval(() => {
        segundos++;
        atualizaFrontend(segundos, 'black')
    }, 1000);
})

pausar.addEventListener('click', (event) => {
    clearInterval(timer);
    atualizaFrontend(segundos, 'red');
})

zerar.addEventListener('click', (event) => {
    clearInterval(timer);
    segundos = 0;
    atualizaFrontend(segundos, 'black');
})
