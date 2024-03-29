const API_URL="https://t-planifica.herokuapp.com";

export async function getAllTareas() {
    try{
    const response = await fetch (`${API_URL}/tareas`);
    const data = await response.json();
    return data;
    } catch (error){
        console.error(error);
    }
}

export async function getMisTareasAsignadasInacabadas() {
    const jwt = window.sessionStorage.getItem('jwt');
    const myHeader = new Headers({
        "Authorization": `Bearer ${jwt}`
    });

    const myInit = {
        method: 'GET',
        headers: myHeader,
        mode: 'cors',  
        cache: 'default'
    };

    const myRequest = new Request(`${API_URL}/misTareasAsignadasUnfinished`, myInit);
    try {
        const response = await fetch(myRequest)
        return (response.status == 200 ?  await response.json() : [])
    } catch (error){
    }
}

export async function getMisTareasCreadas() {
    const jwt = window.sessionStorage.getItem('jwt');
    const myHeader = new Headers({
        "Authorization": `Bearer ${jwt}`
    });

    const myInit = {
        method: 'GET',
        headers: myHeader,
        mode: 'cors',  
        cache: 'default'
    };

    const myRequest = new Request(`${API_URL}/misTareasCreadas`, myInit);
    try {
        const response = await fetch(myRequest)
        return await response.json();
    } catch (error){
        console.error(error);
    }
}

export async function getMisTareasRelacionadas() {
    const jwt = window.sessionStorage.getItem('jwt');
    const myHeader = new Headers({
        "Authorization": `Bearer ${jwt}`
    });

    const myInit = {
        method: 'GET',
        headers: myHeader,
        mode: 'cors',  
        cache: 'default'
    };

    const myRequest = new Request(`${API_URL}/misTareasRelacionadas`, myInit);
    try {
        const response = await fetch(myRequest)
        return await response.json();
    } catch (error){
        console.error(error);
    }
}

export async function getTareasHoy() {
    const jwt = window.sessionStorage.getItem('jwt');
    const myHeader = new Headers({
        "Authorization": `Bearer ${jwt}`
    });

    const myInit = {
        method: 'GET',
        headers: myHeader,
        mode: 'cors',  
        cache: 'default'
    };

    const myRequest = new Request(`${API_URL}/tareasHoy`, myInit);
    try {
        const response = await fetch(myRequest)
        return await response.json();
    } catch (error){
        console.error(error);
    }
}

export async function getTareasHoyInacabadas() {
    const jwt = window.sessionStorage.getItem('jwt');
    const myHeader = new Headers({
        "Authorization": `Bearer ${jwt}`
    });

    const myInit = {
        method: 'GET',
        headers: myHeader,
        mode: 'cors',  
        cache: 'default'
    };

    const myRequest = new Request(`${API_URL}/tareasHoyInacabadas`, myInit);
    try {
        const response = await fetch(myRequest)
        return await response.json();
    } catch (error){
        console.error(error);
    }
}

export async function getMisTareasHoyEnProceso() {
    const jwt = window.sessionStorage.getItem('jwt');
    const myHeader = new Headers({
        "Authorization": `Bearer ${jwt}`
    });

    const myInit = {
        method: 'GET',
        headers: myHeader,
        mode: 'cors',  
        cache: 'default'
    };

    const myRequest = new Request(`${API_URL}/tareasHoyEnProceso`, myInit);
    try {
        const response = await fetch(myRequest)
        return await response.json();
    } catch (error){
        console.error(error);
    }
}

export async function getMisTareasHoySinEmpezar() {
    const jwt = window.sessionStorage.getItem('jwt');
    const myHeader = new Headers({
        "Authorization": `Bearer ${jwt}`
    });

    const myInit = {
        method: 'GET',
        headers: myHeader,
        mode: 'cors',  
        cache: 'default'
    };

    const myRequest = new Request(`${API_URL}/tareasHoySinEmpezar`, myInit);
    try {
        const response = await fetch(myRequest)
        return await response.json();
    } catch (error){
        console.error(error);
    }
}