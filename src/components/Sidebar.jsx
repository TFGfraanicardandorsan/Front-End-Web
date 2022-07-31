import React from "react";
import { Link } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md'
import { Box, Text, Flex, Button, Image } from '@chakra-ui/react'
import { FaTasks } from 'react-icons/fa'
import { AiOutlineTeam } from 'react-icons/ai'
import { RiTeamLine } from 'react-icons/ri'
import { GoTasklist } from 'react-icons/go'
import { useStateContext } from "../contents/ContextProvider";
import useUser from '../hooks/useUser'

const Sidebar = () => {

    const { activeMenu, setActiveMenu, screenSize } = useStateContext();

    const { isLogged, logout } = useUser()

    const handleCloseSideBar = () => {
        if (activeMenu && screenSize <= 900) {
            setActiveMenu(false)
        }
    }

    const handleClick = e => {
        e.preventDefault()
        logout()
    }

    return (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
            {activeMenu && (<>
                <div className="flex justify-between items-center">
                    <Link to="/" onClick={handleCloseSideBar}
                        className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                        <Image
                            boxSize='120px'
                            align='center'
                            src="../src/assets/logo.png"
                            alt='logo'
                        />
                    </Link>
                    <section>
                        <button type="button"
                            onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                            className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
                            <MdOutlineCancel />
                        </button>
                    </section>
                </div>
                <div className="mt-10">
                    <Box bg='yellow.200' w='95%' p={1} color='black' borderRadius={20}>
                        <Text fontSize="2xl" align='center'>
                            <strong>Tareas</strong>
                        </Text>
                        <Flex align='center' fontSize={15}>
                            <Button colorScheme='transparent' textColor='black' p={4} ml={5} mr={6} top={1} >
                                <FaTasks />
                                <Link to="/tareas">
                                    <Text fontSize="xl" ml={2} mr={3}>
                                        <strong>Tareas</strong>
                                    </Text>
                                </Link>
                            </Button>

                        </Flex>
                        <Flex align='center' fontSize={15}>
                            <Button colorScheme='transparent' textColor='black' p={4} ml={5} mr={6} top={1}>
                                <GoTasklist />
                                <Link to="/mistareas">
                                    <Text fontSize="xl" ml={2} mr={3}>
                                        <strong>Mis Tareas</strong>
                                    </Text>
                                </Link>
                            </Button>
                        </Flex>
                        <Flex align='center' fontSize={15}>
                            <Button colorScheme='transparent' textColor='black' p={4} ml={5} mr={6} top={1}>
                                <GoTasklist />
                                <Link to="/nuevaTarea">
                                    <Text fontSize="xl" ml={2} mr={3}>
                                        <strong>Crear Tareas</strong>
                                    </Text>
                                </Link>
                            </Button>
                        </Flex>
                    </Box>

                    <Box bg='white' w='95%' p={1} color='black'>
                    </Box>

                    <Box bg='yellow.200' w='95%' p={1} color='black' borderRadius={20}>
                        <Text fontSize="2xl" align='center'>
                            <strong>Equipos</strong>
                        </Text>
                        <Flex align='center' fontSize={15}>
                            <Button colorScheme='transparent' textColor='black' p={4} ml={5} mr={6} top={1} >
                                <AiOutlineTeam />
                                <Link to="/equipos">
                                    <Text fontSize="xl" ml={2} mr={3}>
                                        <strong>Equipos</strong>
                                    </Text>
                                </Link>
                            </Button>

                        </Flex>
                        <Flex align='center' fontSize={15}>
                            <Button colorScheme='transparent' textColor='black' p={4} ml={5} mr={6} top={1}>
                                <RiTeamLine />
                                <Link to="/misEquipos">
                                    <Text fontSize="xl" ml={2} mr={3}>
                                        <strong>Mis Equipos</strong>
                                    </Text>
                                </Link>
                            </Button>
                        </Flex>
                        <Flex align='center' fontSize={15}>
                            <Button colorScheme='transparent' textColor='black' p={4} ml={5} mr={6} top={1}>
                                <GoTasklist />
                                <Link to="/nuevoEquipo">
                                    <Text fontSize="xl" ml={2} mr={3}>
                                        <strong>Crear Equipos</strong>
                                    </Text>
                                </Link>
                            </Button>
                        </Flex>
                    </Box>
                    <Box bg='white' w='95%' p={1} color='black'>
                    </Box>
                    <Box bg='yellow.200' w='95%' p={1} color='black' borderRadius={20}>
                        <Flex align='center' fontSize={15}>
                            <Button colorScheme='transparent' textColor='black' p={4} ml={5} mr={6} top={1}>
                                <RiTeamLine />
                                {isLogged
                                    ? <Link to='#' onClick={logout}>
                                        <Text fontSize="xl" ml={2} mr={3}>
                                            <strong>Cerrar Sesión</strong>
                                        </Text>
                                    </Link>
                                    :
                                    <Link to="/login">
                                        <Text fontSize="xl" ml={2} mr={3}>
                                            <strong>Iniciar Sesión</strong>
                                        </Text>
                                    </Link>}
                            </Button>
                        </Flex>
                    </Box>
                    <Box bg='white' w='95%' p={1} color='black'>
                    </Box>
                    <Box bg='yellow.200' w='95%' p={1} color='black' borderRadius={20}>
                        <Flex align='center' fontSize={15}>
                            <Button colorScheme='transparent' textColor='black' p={4} ml={5} mr={6} top={1}>
                                <GoTasklist />
                                <Link to="/register">
                                    <Text fontSize="xl" ml={2} mr={3}>
                                        <strong>Registrarse</strong>
                                    </Text>
                                </Link>
                            </Button>
                        </Flex>
                    </Box>
                </div>
            </>)}
        </div>
    )
}
export default Sidebar