import React, {useState} from 'react'

const Context = React.createContext({})

export function UserContextProvider ({children}) {
    const [jwt, setJWT] = useState(() => window.sessionStorage.getItem('jwt')
    )   // EL ESTADO INICIAL DEL USE STATE CADA VEZ QUE RENDERIZAMOS VOLVERÍA A EJECUTAR LA LÍNEA 7 AUNQUE NO ACTUALIZA EL ESTADO, SI LO PONES EN UNA FUNCIÓN ES UNA BUENA PRÁCTICA

    return <Context.Provider value={{jwt,setJWT}}>
        {children}
    </Context.Provider>
}

export default Context