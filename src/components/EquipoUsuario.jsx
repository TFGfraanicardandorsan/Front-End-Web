import { useState, useEffect } from "react";
import { Box, Flex, Text, Spacer, Heading } from "@chakra-ui/react"
import * as API from "../services/equipos";
import * as APP from "../services/usuarios";
import Navbar from './Navbar';

export function EquipoUsuario() {

    const [equipos, setEquipos] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    // const [usuarioId, setUsuarioId] = useState('');

    const API_URL =

        useEffect(() => {
            API.getMisEquipos().then(setEquipos);
        }, []);

    useEffect(() => {
        APP.getMisDatos().then(setUsuarios);
    }, []);

    async function encontrarCompaneros(idEquipo) {
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

        const myRequest = new Request(`${API_URL}/` + idEquipo + '/partners', myInit);
        try {
            const response = await fetch(myRequest)
            return await response.json();
        } catch (error) {
        }
    }

    async function encontrarManagers(idEquipo) {
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

        const myRequest = new Request(`${API_URL}/` + idEquipo + '/managers', myInit);
        try {
            const response = await fetch(myRequest)
            return await response.json();
        } catch (error) {
        }
    }

    async function encontrarAsociados(idEquipo) {
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

        const myRequest = new Request(`${API_URL}/` + idEquipo + '/asociados', myInit);
        try {
            const response = await fetch(myRequest)
            return await response.json();
        } catch (error) {
        }
    }

    async function ascenderManager(idEquipo, idUsuario) {
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

        const myRequest = new Request(`${API_URL}/equipo/` + idEquipo + '/volverManager/' + idUsuario, myInit);
        try {
            const response = await fetch(myRequest)
            return await response.json();
        } catch (error) {
        }
    }

    async function descenderManager(idEquipo, idUsuario) {
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

        const myRequest = new Request(`${API_URL}/equipo/` + idEquipo + '/volveAsociado/' + idUsuario, myInit);
        try {
            const response = await fetch(myRequest)
            return await response.json();
        } catch (error) {
        }
    }

    return (
        <>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <Navbar />
            </div>
            <Heading align="center" as="h1" size="2xl" m={4} >
                Mis Equipos
            </Heading>
            <section>
                {equipos.map((equipo) => (
                    < Box
                        key={equipo.id}
                        bg="yellow.200"
                        p={4}
                        m={4}
                        borderRadius="lg"
                    >
                        <Flex>
                            <Text fontSize="2xl">
                                <strong>Nombre</strong> :  {equipo.nombre}
                                <br></br>
                                <strong>Usuario</strong> : {equipo.creador.username}
                                <br></br>
                                <strong>Nombre y Apellidos</strong> : {equipo.creador.nombre} {equipo.creador.apellidos}
                                <br></br>
                                <strong>Email</strong> : {equipo.creador.email}
                                <br></br>
                                <strong>Hora de Inicio de Trabajo</strong> : {equipo.creador.horaInicioTrabajar}
                                <br></br>
                                <strong>Hora de Finalizción de Trabajo</strong> : {equipo.creador.horaFinTrabajar}
                                <br></br>
                                <strong>Equipo</strong> : {equipo.creador.equipo}
                                <br></br>
                                <strong>Asociados</strong> : {equipo.asociados.map((item, i) => (
                                    <text key={i}>
                                        {item.nombre} {item.apellidos} ;
                                    </text>
                                ))}
                                <br></br>
                                <strong>Managers</strong> : {equipo.managers.map((item, i) => (
                                    <text key={i}>
                                        {item.nombre} {item.apellidos} ;
                                    </text>
                                ))}

                                <Button colorScheme='transparent' textColor='black' p={4} ml={5} mr={6} top={1}
                                    onClick={() => encontrarCompaneros(equipo.id)} >
                                    <font size="6"><BsClipboardPlus /></font>
                                </Button>
                            </Text>
                            <Spacer />
                        </Flex>
                    </Box>
                ))}
            </section>
        </>
    )
}