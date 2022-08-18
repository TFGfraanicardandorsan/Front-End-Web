import { useState } from 'react';
import { IoEyeSharp } from 'react-icons/io5'
import { FaEyeSlash } from 'react-icons/fa'
import { Heading, FormControl, FormLabel, Input, Box, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import  Header  from './Header'

export function Registro() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [show, setShow] = useState('');
    const handleClick = () => setShow(!show);

    const handleSubmit = (e) => {
        e.preventDefault();

        const registro = { username, password, nombre, apellidos, email };
        fetch('https://t-planifica.herokuapp.com/register', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(registro)
        }).then(() => {
            alert("Se ha registrado correctamente")
        })
    }

    return (
        <>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <Header />
            </div>
            <Heading align="center" as="h1" size="2xl" m={4} >Registro</Heading>
            < Box bg="yellow.200" p={4} m={4} borderRadius="lg" >
                <form onSubmit={handleSubmit}>
                    <FormControl isRequired >
                        <FormLabel> Usuario </FormLabel>
                        <Input borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' placeholder='Usuario' bg='yellow.200'
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
                    <br></br>
                    <FormControl isRequired >
                        <FormLabel> Nombre </FormLabel>
                        <Input borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' placeholder='Nombre' bg='yellow.200'
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </FormControl>
                    <br></br>
                    <FormControl isRequired >
                        <FormLabel> Apellidos </FormLabel>
                        <Input borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' placeholder='Apellidos' bg='yellow.200'
                            type="text"
                            value={apellidos}
                            onChange={(e) => setApellidos(e.target.value)}
                        />
                    </FormControl>
                    <br></br>
                    <FormControl isRequired >
                        <FormLabel> Email </FormLabel>
                        <Input borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' placeholder='Email' bg='yellow.200'
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <br></br>
                    <button>
                        <Button colorScheme='black' variant='outline' borderColor='black' focusBorderColor='black' borderRadius={40} size='lg'>
                            Registrarse
                        </Button>
                    </button>
                </form>
            </Box>
        </>
    );
}