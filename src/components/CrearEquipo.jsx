import { useState, useEffect } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
registerLocale('es', es)
import swal from 'sweetalert'
import Navbar from './Navbar';
import {
    Heading, FormControl, FormLabel, Input, Box, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper,
    NumberDecrementStepper, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Select, Switch, Button
} from '@chakra-ui/react'

export function CrearEquipo() {
    const [nombre, setNombre] = useState('');

    const mostrarAlerta = () => {
        swal ({
            title: "Se ha creado el equipo",
            text : "Equipo creado satisfactoriamente",
            icon: "success",
            button: "Aceptar"
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const jwt = window.sessionStorage.getItem('jwt');
        const equipo = { nombre };
        fetch('https://t-planifica.herokuapp.com/nuevoEquipo', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwt}`
            },
            body: JSON.stringify(equipo)
        }).then(() => {
            mostrarAlerta()
        })
    }

    return (
        <>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <Navbar />
            </div>
            <Heading align="center" as="h1" size="2xl" m={4} >Crear Equipo</Heading>
            < Box bg="yellow.200" p={4} m={4} borderRadius="lg" >
                <form onSubmit={handleSubmit}>
                    <FormControl isRequired >
                        <FormLabel> Nombre </FormLabel>
                        <Input borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' placeholder='Nombre' bg='yellow.200'
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </FormControl>
                    <br></br>
                    <button>
                        <Button colorScheme='black' variant='outline' borderColor='black' focusBorderColor='black' borderRadius={40} size='lg'>
                            Crear Equipo
                        </Button>
                    </button>
                </form>
            </Box>
        </>
    );
}