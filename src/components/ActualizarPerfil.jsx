import { useState, useEffect } from 'react';
import { Heading, FormControl, FormLabel, Input, Box, InputGroup, Button } from '@chakra-ui/react'
import * as API from '../services/usuarios'
import Navbar from './Navbar';

export function ActualizarPerfil() {

    const [usuarios, setUsuarios] = useState([])
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [horaInicioTrabajar, setHoraInicioTrabajar] = useState('');
    const [horaFinTrabajar, setHoraFinTrabajar] = useState('');

    useEffect(() => {
        API.getMisDatos().then(setUsuarios);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const jwt = window.sessionStorage.getItem('jwt');
        fetch('https://t-planifica.herokuapp.com/actualizarPerfil', {
            method: 'POST',
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${jwt}` },
            body: JSON.stringify({ id: usuarios.id, username, password, nombre, apellidos, email, horaInicioTrabajar, horaFinTrabajar })
        }).then(() => {
            alert("Se ha actualizado el perfil correctamente")
        })
    }

    return (
        <>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <Navbar />
            </div>
            <Heading align="center" as="h1" size="2xl" m={4} >Actualizar Perfil</Heading>
            < Box bg="yellow.200" p={4} m={4} borderRadius="lg" >
                <form onSubmit={handleSubmit}>
                    <FormControl isRequired  >
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} s
                            />
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
                    <FormControl isRequired >
                        <FormLabel> Hora inicio </FormLabel>
                        <Input borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' bg='yellow.200'
                            type="time"
                            value={horaInicioTrabajar}
                            onChange={(hora) => setHoraInicioTrabajar(hora.target.value)}
                        />
                    </FormControl>
                    <br></br>
                    <FormControl isRequired >
                        <FormLabel> Hora finalización </FormLabel>
                        <Input borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' bg='yellow.200'
                            type="time"
                            value={horaFinTrabajar}
                            onChange={(hora) => setHoraFinTrabajar(hora.target.value)}
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