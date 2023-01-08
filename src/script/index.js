import { getUser } from "./services/user.js";
import { getRepositories } from "./services/repositories.js";

import { user } from "./object/user.js";
import { screen } from "./object/screen.js";

document.getElementById('btn-search').addEventListener('click', ()=>{
    const userName = document.getElementById('input-search').value;
    if(userName.length === 0){
        alert('Preencha o campo de busca com o nome do usuário do GitHub');
        return
    }
    getUserData(userName);
});

document.getElementById('input-search').addEventListener('keyup', (e)=>{
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const isEnterKeyPressed = key === 13;

    if(isEnterKeyPressed){
        if(userName.length === 0){
            alert('Preencha o campo de busca com o nome do usuário do GitHub');
            return
        }
        getUserData(userName);
    }
});

async function getUserData(userName){

    const userResponse =  await getUser(userName);
    const repositoriesResponse =  await getRepositories(userName);

    user.setInfo(userResponse);
    user.setRepositories(repositoriesResponse);

    screen.renderUse(user)
};
