async function user(){
    const response = await fetch('https://api.github.com/user');
    return await response.json();
}

console.log(user());