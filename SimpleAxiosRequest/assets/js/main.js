axios('users.json')
  .then(resposta => loadElement(resposta.data));

function loadElement(json) {
  const table = document.createElement('table');

  for(let user of json) {
    const tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = user.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = user.idade;
    tr.appendChild(td);
    
    td = document.createElement('td');
    td.innerHTML = user.salario;
    tr.appendChild(td);

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.result');
  resultado.appendChild(table);
}
