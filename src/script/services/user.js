import { baseUrl } from "/src/script/variables.js";

async function user(userName){
    const response = await fetch(`${baseUrl}/${userName}`);
    return await response.json();
}

export { user }