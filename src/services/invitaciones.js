const API_URL = 'https://t-planifica.herokuapp.com'

export async function getMisInvitaciones() {
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

    const myRequest = new Request(`${API_URL}/invitaciones`, myInit);
    try {
        const response = await fetch(myRequest)
        return await response.json();
    } catch (error){
        console.error(error);
    }
}