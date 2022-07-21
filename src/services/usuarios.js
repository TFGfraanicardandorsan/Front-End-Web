const API_URL="http://localhost:8080";

export async function getMisDatos() {
    try{
    const response = await fetch (`${API_URL}/misDatos`);
    const data = await response.json();
    return data;
    } catch (error){
        console.error(error);
    }
}