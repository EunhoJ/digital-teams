let teams = []

criarBtn.onclick = () => {
  overlay.classList.add("show");
  formCriar.classList.add("show");
};

fecharBtn.onclick = () => {
  overlay.classList.remove("show");
  formCriar.classList.remove("show");
};

overlay.onclick = () => {
  overlay.classList.remove("show");
  formCriar.classList.remove("show");
};

criarCard.onclick = () => {
  if(nome.value !="" && capacidade.value != ""){
    overlay.classList.remove("show");
    formCriar.classList.remove("show");
  }
}

formCriar.onsubmit = () => {
  event.preventDefault();

  teams.push({
    name: nome.value,
    capacity: capacidade.value,
    members: []
  })
  viewCards();
  overlay.classList.remove("show");
  formCriar.classList.remove("show");
};

function viewCards(){
  listTeams.innerHTML = "";
  for(let i = 0; i <= teams.length; i++){
  listTeams.innerHTML += `
      <li>
          <h4>${teams[i].name}<box-icon name='show'></box-icon></h4>
          <h1>0 <span>/ ${teams[i].capacity}</span></h1>
          <div class="actions">
              <button>adicionar</button>
              <button><box-icon id="deleteTeam" name='trash'></box-icon></button>
          </div>
      </li>
      
      `;
    }
  }
