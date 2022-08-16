import React, { useState, useEffect } from 'react'
import { Heading, FormControl, FormLabel, Input, Box, Button, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { IoEyeSharp } from 'react-icons/io5'
import { FaEyeSlash } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';
import useUser from '../hooks/useUser'

export function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [show, setShow] = useState('');
    const handleClick = () => setShow(!show);
    const navigate = useNavigate();
    const { isLoginLoading, hasLoginError, login, isLogged } = useUser();

    useEffect(() => {
        if (isLogged) navigate('/inicio')
    }, [isLogged, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ username, password })
    }

    return (
        <>
            <Heading align="center" as="h1" size="2xl" m={4} >Login</Heading>
            < Box bg="yellow.200" p={4} m={4} borderRadius="lg" >
                {isLoginLoading && <strong>Comprobando credenciales ...</strong>}
                {!isLoginLoading &&
                    <form onSubmit={handleSubmit}>
                        <FormControl isRequired >
                            <FormLabel> Usuario </FormLabel>
                            <Input borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' placeholder='Nombre' bg='yellow.200'
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </FormControl>
                        <br></br>
                        <FormControl isRequired >
                            <FormLabel> Contraseña </FormLabel>
                            <InputGroup size='md'>
                                <Input borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' bg='yellow.200' placeholder='Contraseña'
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} s
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='2rem' size='lg' bg='yellow.200' colorScheme='transparent' color='black' top={1} mr={2} p={2}
                                        onClick={handleClick} >
                                        {show ? <FaEyeSlash /> : <IoEyeSharp />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <br /> <br />
                        <button>
                            <Button colorScheme='black' variant='outline' borderColor='black' focusBorderColor='black' borderRadius={40} size='lg'>
                                Entrar
                            </Button>
                        </button>
                        <Link to="/register">
                                    <Text fontSize="xl" ml={2} mr={3}>
                                        <strong>¿No tienes cuenta todavía? <i>Comienza ya.</i></strong>
                                    </Text>
                                </Link>
                    </form>
                }
                {
                    hasLoginError && <strong>Las credenciales son inválidas</strong>
                }
            </Box>
        </>
    )
}

