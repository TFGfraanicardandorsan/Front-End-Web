import React, { useState } from 'react'
import { Heading, FormControl, FormLabel, Input, Box, 
     Button, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { IoEyeSharp } from 'react-icons/io5'
import { FaEyeSlash } from 'react-icons/fa'
import useUser from '../hooks/useUser'
import { useEffect } from 'react'

export function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [show, setShow] = useState('');
    const handleClick = () => setShow (!show);
    const navigate = useNavigate();
    
    const{login, isLogged} = useUser()

    useEffect(() => {
        if (isLogged) navigate('/')
    }, [isLogged, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        login({username,password})
    //     const login = { username, password };

    //     fetch('https://t-planifica.herokuapp.com/authenticate', {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(login)
    //     }).then(() => {
    //         console.log('Se ha conectado');
    //         alert("Ha accedido correctamente")
    //     })
    //      console.log(login)
        // navigate('/')   //PARA IR AL INICIO DE LA APLICACIÓN
    // };
    }

    return (
        <>
            <Heading align="center" as="h1" size="2xl" m={4} >Login</Heading>
            < Box bg="yellow.200" p={4} m={4} borderRadius="lg" >
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
                                onChange={(e) => setPassword(e.target.value)}s
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='2rem' size='lg' bg='yellow.200' colorScheme='transparent' color='black' top={1} mr={2} p={2} 
                                onClick={handleClick} > 
                                {show ? <FaEyeSlash/> : <IoEyeSharp />}
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
                </form>
            </Box>
            
        </>
    )
}

