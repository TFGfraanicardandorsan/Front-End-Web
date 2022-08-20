import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Spacer, Tag, Button, Select, CircularProgress, CircularProgressLabel, Progress } from "@chakra-ui/react";
import { HiCalendar, HiClock } from "react-icons/hi";
import { RiNotification3Line } from 'react-icons/ri';
import { BsChatLeft } from 'react-icons/bs';
import Navbar from './Navbar';
import * as API from "../services/tareas";
import * as APP from "../services/invitaciones";
import * as AP from "../services/notificaciones";
import * as US from "../services/usuarios";
import * as EQUI from "../services/equipos";

export function Inicio() {

    const API_URL = 'https://t-planifica.herokuapp.com'
    const [tareasHoy, setTareasHoy] = useState([]);
    const [tareasInacabadasHoy, setTareasInacabadasHoy] = useState([]);
    const [tareasSinEmpezar, setTareasSinEmpezar] = useState([]);
    const [tareasEnProceso, setTareasEnProceso] = useState([]);
    const [equipos, setEquipos] = useState([]);
    const [misEquipos, setMisEquipos] = useState([]);
    const [idEquipo, setIdEquipo] = useState([])
    const [equipoId, setEquipoId] = useState('');
    const [datos, setDatos] = useState([]);
    const [dato, setDato] = useState([]);
    const [data, setData] = useState([]);
    const [managers, setManagers] = useState([]);
    const [asociados, setAsociados] = useState([])
    const [invitaciones, setInvitaciones] = useState([]);
    const [notificaciones, setNotificaciones] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

    const valor = (((tareasHoy.length - tareasInacabadasHoy.length) / tareasHoy.length) * 100)

    useEffect(() => {
        API.getTareasHoy().then(setTareasHoy);
    }, []);

    useEffect(() => {
        API.getTareasHoyInacabadas().then(setTareasInacabadasHoy);
    }, []);

    useEffect(() => {
        API.getMisTareasHoyEnProceso().then(setTareasEnProceso);
    }, []);

    useEffect(() => {
        API.getMisTareasHoySinEmpezar().then(setTareasSinEmpezar);
    }, []);

    useEffect(() => {
        EQUI.getEquiposAdministrados().then(setEquipos);
    }, [])

    useEffect(() => {
        EQUI.getMisEquipos().then(setMisEquipos);
    }, [])

    useEffect(() => {
        APP.getMisInvitaciones().then(setInvitaciones);
    }, []);

    useEffect(() => {
        AP.getMisNotificaciones().then(setNotificaciones);
    }, []);

    useEffect(() => {
        US.numeroUsuarios().then(setUsuarios);
    }, []);



    async function TareasEquipo(idEquipo) {
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

        const myRequest = new Request(`${API_URL}/tareasEquipo/` + idEquipo, myInit);
        try {
            await fetch(myRequest)
                .then((response) => response.json())
                .then((json) => {
                    setDato(json);
                });
        } catch (error) {
        }
    }

    async function SeleccionarEquipo(id) {
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

        const myRequest = new Request(`${API_URL}/equipo/` + id, myInit);
        try {
            await fetch(myRequest)
                .then((response) => response.json())
                .then((json) => {
                    setDatos(json);
                });
        } catch (error) {
        }
    }

    async function getEncontrarCompaneros(equipoId) {
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

        const myRequest = new Request(`${API_URL}/` + equipoId + '/partners', myInit);
        try {
            await fetch(myRequest)
                .then((response) => response.json())
                .then((json) => {
                    setData(json);
                });
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
            await fetch(myRequest)
                .then((response) => response.json())
                .then((json) => {
                    setManagers(json);
                });
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
            await fetch(myRequest)
                .then((response) => response.json())
                .then((json) => {
                    setAsociados(json);
                });
        } catch (error) {
        }
    }


    return (
        <>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <Navbar />
            </div>
            <div className="mt-20">
                <div className="flex flex-wrap lg:flex-nowrap justify-center ">
                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-40 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
                        <div className="flex justify-between items-right">
                            <div>
                                <p className="font-bold text-white">Usuarios</p>
                                <p className="text-3xl text-white">{usuarios}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-40 rounded-xl w-full lg:w-80 p-8 pt-9 m-3  ">
                        <div className="flex justify-between items-right">
                            <div>
                                <p className="font-bold text-black">Notificaciones</p>
                                <p className="text-3xl text-black">{notificaciones.length}</p>
                            </div>
                            <RiNotification3Line size='30px' />
                        </div>
                    </div>

                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-40 rounded-xl w-full lg:w-80 p-8 pt-9 m-3">
                        <div className="flex justify-between items-right">
                            <div>
                                <p className="font-bold text-black">Invitaciones</p>
                                <p className="text-3xl text-black">{invitaciones.length}</p>
                            </div>
                            <BsChatLeft size='30px' />
                        </div>
                    </div>
                </div>
                <div className="flex gap-10 flex-wrap justify-center">
                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
                        <div className="flex justify-between p-2">
                            <p className="font-semibold text-xl">Tareas para hoy</p>
                            <div className="flex items-center gap-4">
                            </div>
                        </div>
                        <section>
                            {tareasHoy.map((tarea) => (
                                < Box
                                    key={tarea.id}
                                    bg="yellow.200"
                                    p={1}
                                    m={1}
                                    borderRadius="lg"
                                >
                                    <Flex>
                                        <Text fontSize="l">
                                            <strong>Nombre</strong> :  {tarea.nombre}
                                            <br></br>
                                            <strong>Descripción</strong> : {tarea.descripcion}
                                            <br></br>
                                        </Text>
                                        <Spacer />
                                        <Text p={3}><strong>Estado:</strong></Text>
                                        <Tag p={1} colorScheme="green" >
                                            {tarea.estado}
                                        </Tag>
                                    </Flex>
                                    <Flex align="center">
                                        <HiCalendar />
                                        <Text fontSize="l" ml={1} p={1.5} mr={6}>
                                            <strong>Fecha Asignada: {tarea.fechaHoraAsignada.split("T")[0]} {tarea.fechaHoraAsignada.split("T")[1].split(":")[0]}:{tarea.fechaHoraAsignada.split("T")[1].split(":")[1]}</strong>
                                        </Text>
                                        <Spacer />
                                        <Text mr={1} ><strong>Prioridad:</strong></Text>
                                        <Tag p={2} ml={6} mr={8} colorScheme="red"  >
                                            <text>{tarea.priorizacion}</text>
                                        </Tag>
                                    </Flex>
                                </Box>
                            ))}
                        </section>
                    </div>
                    <div>
                        <div
                            className=" bg-white rounded-2xl md:w-400 p-4 m-3"
                        >
                            <div className="flex justify-between items-center ">
                                <p className="font-semibold text-black text-2xl">Tareas sin empezar: </p>
                            </div>
                            <div className="mt-4">
                                <Progress colorScheme='yellow' height='32px' value={tareasSinEmpezar.length} min={0} max={tareasHoy.length} />
                            </div>
                        </div>
                        <div
                            className=" bg-white rounded-2xl md:w-400 p-4 m-3"
                        >
                            <div className="flex justify-between items-center ">
                                <p className="font-semibold text-black text-2xl">Tareas en proceso: </p>
                            </div>
                            <div className="mt-4">
                                <Progress colorScheme='yellow' height='32px' value={tareasEnProceso.length} min={0} max={tareasHoy.length} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-10 flex-wrap justify-center">
                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
                        <div className="flex justify-between p-2">
                            <p className="font-semibold text-xl">Tareas por equipos</p>
                            <Select placeholder='Selecciona una opción' borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' bg='yellow.200'
                                onChange={(e) => setEquipoId(e.target.value)} >
                                {equipos.map((equipo) => (
                                    <option key={equipo.id} value={equipo.id}>{equipo.nombre}</option>
                                ))}
                            </Select>
                            <div className="flex items-center gap-4">
                            </div>
                        </div>
                        <section>
                            {dato.map((item) => (
                                < Box
                                    key={item.id}
                                    bg="yellow.200"
                                    p={1}
                                    m={1}
                                    borderRadius="lg"
                                >
                                    <Flex>
                                        <Text fontSize="l">
                                            <strong>Nombre</strong> :  {item.nombre}
                                            <br></br>
                                            <strong>Descripción</strong> : {item.descripcion}
                                            <br></br>
                                        </Text>
                                        <Spacer />
                                        <Text p={3}><strong>Estado:</strong></Text>
                                        <Tag p={1} colorScheme="green" >
                                            {item.estado}
                                        </Tag>
                                    </Flex>
                                    <Flex align="center">
                                        <HiCalendar />
                                        <Text fontSize="l" ml={1} p={1.5} mr={6}>
                                            <strong>Fecha Asignada: {item.fechaHoraAsignada.split("T")[0]} {item.fechaHoraAsignada.split("T")[1].split(":")[0]}:{item.fechaHoraAsignada.split("T")[1].split(":")[1]}</strong>
                                        </Text>
                                        <Spacer />
                                        <Text mr={1} ><strong>Prioridad:</strong></Text>
                                        <Tag p={2} ml={6} mr={8} colorScheme="red"  >
                                            <text>{item.priorizacion}</text>
                                        </Tag>
                                    </Flex>
                                </Box>
                            ))}
                        </section>
                        <div className="flex justify-between items-center mt-3 border-t-1 border-color">
                            <div className="mt-3">
                            </div>
                            <Button bg='yellow.200' p={4} ml={5} mr={6} top={2}
                                onClick={() => TareasEquipo(equipoId)} >
                                Ver Tareas
                            </Button>
                        </div>
                    </div>
                    <div>
                        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
                            <div>
                                <p className="text-2xl font-semibold ">Tareas Terminadas</p>

                            </div>
                            <div className="w-40">
                                <CircularProgress value={valor} color='orange.300' max={100} min={0} size='140px'>
                                    <CircularProgressLabel> {valor}% </CircularProgressLabel>
                                </CircularProgress>
                            </div>
                        </div>
                        <div className=" bg-white rounded-2xl md:w-400 p-4 m-3">
                            <div className="flex justify-between items-center ">
                                <p className="font-semibold text-black text-2xl">Mis estadísticas de equipo</p>
                                <div>
                                    <div className="flex justify-between items-center mt-5 border-t-1 border-color">
                                    </div>
                                </div>
                            </div>

                            <div className="mt-2">
                                <p className="text-md font-semibold mb-2">Soy administrador de: {equipos.length} Equipos</p>
                                <Progress colorScheme='yellow' height='32px' value={20} />
                                <div className="flex justify-between items-center mt-5 border-t-1 border-color"></div>
                                <p className="text-md font-semibold mb-2">Pertenezco a: {misEquipos.length} Equipos</p>
                                <Progress colorScheme='yellow' height='32px' value={20} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-10 flex-wrap justify-center">
                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
                        <div className="flex justify-between p-2">
                            <p className="text-xl font-semibold">Mis Equipos</p>
                            <Select placeholder='Selecciona una opción' borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' bg='yellow.200'
                                onChange={(e) => setIdEquipo(e.target.value)} >
                                {equipos.map((equipo) => (
                                    <option key={equipo.id} value={equipo.id}>{equipo.nombre}</option>
                                ))}
                            </Select>
                        </div>
                        {/* {datos.map((hola) => ( */}
                        < Box
                            bg="yellow.200"
                            // key = {hola.id}
                            p={4}
                            m={4}
                            borderRadius="lg"
                        >
                            <Flex>
                                <Text fontSize="l">
                                    <strong>Equipo</strong> :  {datos.nombre}
                                    <br></br>
                                    {/* <strong>Creador</strong> : {datos.creador.nombre} {datos.creador.apellidos}
                                        <br></br>
                                        <strong>Hora de Inicio de Trabajo</strong> : {datos.creador.horaInicioTrabajar}
                                        <br></br>
                                        <strong>Hora de Finalización de Trabajo</strong> : {datos.creador.horaFinTrabajar}  */}
                                </Text>
                            </Flex>
                        </Box>
                        {/* ))} */}
                        <div className="flex justify-between items-center mt-3 border-t-1 border-color">
                            <div className="mt-3">
                            </div>
                            <Button bg='yellow.200' p={4} ml={5} mr={6} top={2}
                                onClick={() => { getEncontrarCompaneros(idEquipo); encontrarManagers(idEquipo); encontrarAsociados(idEquipo); SeleccionarEquipo(idEquipo) }} >
                                Ver
                            </Button>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white rounded-2xl md:w-400 p-4 m-3">
                            <div className="flex justify-between items-center ">
                                <p className="font-semibold text-black text-2xl">Estadísticas por equipo</p>
                                <div>
                                    <div className="flex justify-between items-center mt-5 border-t-1 border-color">
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="border-b-1 border-color pb-4 mt-2">
                                    <p className="text-md font-semibold mb-2">Compañero: {data.length} </p>
                                    <Progress colorScheme='yellow' height='32px' value={data.length} min={0} max={10} />
                                    <div className="flex gap-4">
                                        <p
                                            className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
                                        >
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <p className="text-md font-semibold mb-2">Administrador: {managers.length}</p>
                                    <Progress colorScheme='yellow' height='32px' value={managers.length} />
                                    <div className="flex gap-4">
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-5 border-t-1 border-color">
                                </div>
                                <div className="mt-2">
                                    <p className="text-md font-semibold mb-2">Asociados: {asociados.length} </p>
                                    <Progress colorScheme='yellow' height='32px' value={asociados.length} />
                                    <div className="flex gap-4">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}