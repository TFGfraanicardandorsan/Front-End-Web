const ENDPOINT = 'https://t-planifica.herokuapp.com'

export default function login ({ username, password }) {
    return fetch (`${ENDPOINT}/authenticate`,{
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({username, password})  
    }).then(res => {
        if(!res.ok) throw new Error ('Response is Not ok')
        return res.json()
    }).then(res=> {
        const { jwt } = res
        return jwt
    })
}