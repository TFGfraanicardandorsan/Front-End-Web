const API_URL="https://t-planifica.herokuapp.com";

export async function getAllEquipos() {
    try{
    const response = await fetch (`${API_URL}/equipos`);
    const data = await response.json();
    return data;
    } catch (error){
        console.error(error);
    }
}

export async function getMisEquipos() {
    try{
    const response = await fetch (`${API_URL}/misEquipos`,
    {credentials :'include'});
    const data = await response.json();
    return data;
    } catch (error){
        console.error(error);
    }
}