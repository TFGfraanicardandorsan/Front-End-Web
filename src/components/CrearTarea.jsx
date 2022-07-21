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
    const [estado, setEstado] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const jwt = window.sessionStorage.getItem('jwt');
        const tarea = { nombre, descripcion, fechaInicio, fechaFin, duracion, priorizacion, estado };
        fetch('http://localhost:8080/nuevaTarea', {
            method: 'POST',
            headers: { "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}`},
            body: JSON.stringify(tarea)
            
        }).then(() => {
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
                    <FormControl isRequired >
                        <FormLabel> Descripción </FormLabel>
                        <Input borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' placeholder='Descripción' bg='yellow.200'
                            type="text"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                        />
                    </FormControl>
                    <br></br>
                    <FormControl isRequired >
                        <FormLabel> Fecha Inicio </FormLabel>
                        <Input borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' bg='yellow.200'
                            type="date"
                            value={fechaInicio}
                            onChange={(fecha) => setFechaInicio(fecha.target.value)}
                        />
                    </FormControl>
                    <br></br>
                    <FormControl isRequired >
                        <FormLabel> Fecha Fin </FormLabel>
                        <Input borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' bg='yellow.200'
                            type="date"
                            value={fechaFin}
                            onChange={(fecha) => setFechaFin(fecha.target.value)}
                        />
                    </FormControl>
                    <br></br>
                    <FormControl isRequired >
                        <FormLabel> Duración </FormLabel>
                        <NumberInput maxW='100px' min={1} max={100} mr='2rem' borderColor='black' focusBorderColor='black' bg='yellow.200'
                            value={duracion} onChange={(duracion) => setDuracion(duracion)}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        <Slider
                            min={1} max={100}
                            flex='1'
                            focusThumbOnChange={false}
                            value={duracion}
                            onChange={(duracion) => setDuracion(duracion)}
                        >
                            <SliderTrack >
                                <SliderFilledTrack bg='black' />
                            </SliderTrack>
                            <SliderThumb fontSize='sm' boxSize='36px' children={duracion} />
                        </Slider>
                    </FormControl>
                    <br></br>
                    <FormControl isRequired >
                        <FormLabel> Priorización </FormLabel>
                        <Select placeholder='Selecciona una opción' borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' bg='yellow.200'
                            onChange={(e) => setPriorizacion(e.target.value)} >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </Select>
                    </FormControl>
                    <br></br>
                    <FormControl isRequired >
                        <FormLabel> Estado </FormLabel>
                        <Select placeholder='Selecciona un estado para la tarea' borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' bg='yellow.200'
                            onChange={(e) => setEstado(e.target.value)} >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </Select>
                    </FormControl>
                    <br></br>
                    <FormControl isRequired >
                        <FormLabel> Terminada </FormLabel>
                        <Switch onChange={(e) => setTerminada(e.target.checked)} colorScheme='yellow' />
                    </FormControl>
                    <br /> <br />
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