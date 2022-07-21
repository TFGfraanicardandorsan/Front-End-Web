import { useState, useEffect } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
registerLocale('es', es)
import { Heading, FormControl, FormLabel, Input, Box, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper,
    NumberDecrementStepper, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Select, Switch, Button } from '@chakra-ui/react'

export function CrearTarea() {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');
    const [duracion, setDuracion] = useState('');
    const [priorizacion, setPriorizacion] = useState('');
    const [terminada, setTerminada] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const tarea = { nombre };

        fetch('http://localhost:8080/nuevaTarea', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(tarea)
        }).then(() => {
            console.log('Nueva tarea añadida');
            alert("Se ha creado la tarea")
        })
    }

    return (
        <>
            <Heading align="center" as="h1" size="2xl" m={4} >Crear Tarea</Heading>
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
                            Crear Tarea
                        </Button>
                    </button>
                </form>
            </Box>
        </>
    );
}