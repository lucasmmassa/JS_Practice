const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


function criaLi() {
    const li = document.createElement('li');
    return li;
}


inputTarefa.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value); 
    }
})


function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus()
}


function criaBotaoApagar(li) {
    li.innerText += ' ';
    const button = document.createElement('button');
    button.innerText = "Apagar"; 
    button.setAttribute('class', 'apagar');
    li.appendChild(button); 
}


function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    criaBotaoApagar(li);
    salvarTarefas();
    limpaInput();
}


btnTarefa.addEventListener('click', (e) => {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})


document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
})


function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}


function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}