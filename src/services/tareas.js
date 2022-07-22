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

// const ENDPOINT = 'http://localhost:8080'

// export default function crearTarea ({ id, jwt }) {
//     return fetch (`${ENDPOINT}/nuevaTarea`,{
//       method: 'POST',
//       headers: {
//         "Content-Type" : "application/json"
//       },
//       body: JSON.stringify({jwt})  
//     }).then(res => {
//         if(!res.ok) throw new Error ('Response is Not ok')
//         return res.json()
//     }).then(res=> {
//         const { nombre } = res
//         return nombre
//     })
// }