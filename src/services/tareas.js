const API_URL="https://t-organize.herokuapp.com";

export async function getAllTareas() {
    try{
    const response = await fetch (`${API_URL}/tareas`);
    const data = await response.json();
    return data;
    } catch (error){
        console.error(error);
    }
}