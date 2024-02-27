let teams = [];

criarBtn.onclick = () => {
    overlay.classList.add('show');
    formCriar.classList.add('show');
}

fecharBtn.onclick = () => {
    overlay.classList.remove('show');
    formCriar.classList.remove('show');
}

fecharParticipanteBtn.onclick = () => {
    overlay.classList.remove('show');
    formParticipante.classList.remove('show');
}

overlay.onclick = () => {
    overlay.classList.remove('show');
    formCriar.classList.remove('show');
    formParticipante.classList.remove('show');
}

formCriar.onsubmit = () => {
    event.preventDefault();
    if(verificarLista(nome.value)){
        alert("Este nome já está em uso");
    }else{
        teams.push({
            name: nome.value,
            capacity: capacidade.value,
            members: []
        });
        adicionarCards();
        overlay.classList.remove('show');
        formCriar.classList.remove('show');
        formCriar.reset();
    }
}

formParticipante.onsubmit = () => {
    event.preventDefault();
    const teamIndex = Number(teamID.value);
    const team = teams[teamIndex];
    const participantName = nomeParticipante.value;

    if (team.members.length >= team.capacity) {
        alert("A equipe atingiu sua capacidade máxima de participantes!");
        return;
    }

    team.members.push(participantName);
    adicionarCards();
    formParticipante.reset();
}

function adicionarCards(){
    listTeams.innerHTML = '';
    if(teams.length === 0){
        listTeams.innerHTML = '<li class="noTeams"><h4>Nenhum team criado ainda</h4></li>';
        return;
    }
    for(let i = 0; i < teams.length; i++){
        const numMembers = teams[i].members.length;
        listTeams.innerHTML += `
            <li>
                <h4>${teams[i].name} <box-icon name='show'></box-icon></h4>
                <h1>${numMembers} <span>/ ${teams[i].capacity}</span></h1>
                <div class="actions">
                    <button onClick="mostrarFormParticipante(${i})">adicionar</button>
                    <button onClick="removerCard(${i})"><box-icon name='trash'></box-icon></button>
                </div>
            </li>
        `;
    }
}

function removerCard(indice){
    let listaAuxiliar = [];
    for(let i = 0; i < teams.length; i++){
        if(i != indice){
            listaAuxiliar.push(teams[i]);
        }
    }
    teams = listaAuxiliar;
    adicionarCards();
}

function verificarLista(nomeDoTeam){
    let achou = false;
    for(let i = 0; i < teams.length; i++){
        if(teams[i].name === nomeDoTeam){
            achou = true;
        }
    }
    return achou;    
}

function mostrarFormParticipante(indice){
    overlay.classList.add("show");
    formParticipante.classList.add("show");
    teamID.value = indice;
}
