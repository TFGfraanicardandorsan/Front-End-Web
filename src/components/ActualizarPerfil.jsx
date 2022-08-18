import { useState } from 'react';
import { Heading, FormControl, FormLabel, Input, Box, InputGroup, Button } from '@chakra-ui/react'

export function ActualizarPerfil() {

    const API_URL = 'https://t-planifica.herokuapp.com'
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const perfil = { username, password, nombre, apellidos, email };
        const jwt = window.sessionStorage.getItem('jwt');
        fetch('https://t-planifica.herokuapp.com/actualizarPerfil', {
            method: 'POST',
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${jwt}` },
            body: JSON.stringify(perfil)
        }).then(() => {
            alert("Se ha actualizado el perfil correctamente")
        })
    }
    return (
        <>
            <Heading align="center" as="h1" size="2xl" m={4} >Actualizar Perfil</Heading>
            < Box bg="yellow.200" p={4} m={4} borderRadius="lg" >
                <form onSubmit={handleSubmit}>
                    <FormControl  >
                        <FormLabel> Usuario </FormLabel>
                        <Input borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' placeholder='Usuario' bg='yellow.200'
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </FormControl>
                    <br></br>
                    <FormControl  >
                        <FormLabel> Contraseña </FormLabel>
                        <InputGroup size='md'>
                            <Input borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' bg='yellow.200' placeholder='Contraseña'
                                pr='4.5rem'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} s
                            />
                        </InputGroup>
                    </FormControl>
                    <br></br>
                    <FormControl  >
                        <FormLabel> Nombre </FormLabel>
                        <Input borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' placeholder='Nombre' bg='yellow.200'
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </FormControl>
                    <br></br>
                    <FormControl  >
                        <FormLabel> Apellidos </FormLabel>
                        <Input borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' placeholder='Apellidos' bg='yellow.200'
                            type="text"
                            value={apellidos}
                            onChange={(e) => setApellidos(e.target.value)}
                        />
                    </FormControl>
                    <br></br>
                    <FormControl  >
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
                            Actualizar
                        </Button>
                    </button>
                </form>
            </Box>
        </>
    );
}