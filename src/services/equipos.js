const API_URL = "https://t-planifica.herokuapp.com";

export async function getAllEquipos() {
    try {
        const response = await fetch(`${API_URL}/equipos`);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function getMisEquipos() {
    const jwt = window.sessionStorage.getItem('jwt');
    const myHeader = new Headers({
        "Authorization": `Bearer ${jwt}`});

    const myInit = {
        method: 'GET',
        headers: myHeader,
        mode: 'cors',  
        cache: 'default'
    };

    const myRequest = new Request(`${API_URL}/misEquipos`, myInit);
    try {
        const response = await fetch(myRequest)
        return await response.json();
    } catch (error){
        console.error(error);
    }
}

export async function getEquiposAdministrados() {
    const jwt = window.sessionStorage.getItem('jwt');
    const myHeader = new Headers({
        "Authorization": `Bearer ${jwt}`});

    const myInit = {
        method: 'GET',
        headers: myHeader,
        mode: 'cors',  
        cache: 'default'
    };

    const myRequest = new Request(`${API_URL}/equiposAdministrados`, myInit);
    try {
        const response = await fetch(myRequest)
        return await response.json();
    } catch {
        console.error(error);
    } 
}