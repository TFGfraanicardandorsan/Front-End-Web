import { useState, useEffect } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
registerLocale('es', es)
import Navbar from './Navbar';
import {
    Heading, FormControl, FormLabel, Input, Box, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper,
    NumberDecrementStepper, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Select, Switch, Button
} from '@chakra-ui/react'

export function CrearTarea() {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');
    const [duracion, setDuracion] = useState('');
    const [priorizacion, setPriorizacion] = useState('');
    const limite = new Date()
    const manana = new Date()
    manana.setDate(limite.getDate() + 1);
    const fechaMinimo = manana.toISOString().split("T")[0];

    const tareaCreada = () => {
        swal({
            title: "Tarea creada satisfactoriamente",
            text: "Se ha creado la tarea " + nombre,
            icon: "success",
            button: "Aceptar"
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const jwt = window.sessionStorage.getItem('jwt');
        const tarea = { nombre, descripcion, fechaInicio, fechaFin, duracion, priorizacion };
        fetch('https://t-planifica.herokuapp.com/nuevaTarea', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwt}`
            },
            body: JSON.stringify(tarea)

        }).then(() => {
            tareaCreada()
        })
    }

    return (
        <>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <Navbar />
            </div>

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
                            min={fechaMinimo}
                            value={fechaInicio}
                            onChange={(fecha) => setFechaInicio(fecha.target.value)}
                        />
                    </FormControl>
                    <br></br>
                    <FormControl isRequired >
                        <FormLabel> Fecha Fin </FormLabel>
                        <Input borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' bg='yellow.200'
                            type="date"
                            min={fechaMinimo}
                            value={fechaFin}
                            onChange={(fecha) => setFechaFin(fecha.target.value)}
                        />
                    </FormControl>
                    <br></br>
                    <FormControl isRequired >
                        <FormLabel> Duración </FormLabel>
                        <NumberInput maxW='100px' min={1} max={12} mr='2rem' borderColor='black' focusBorderColor='black' bg='yellow.200'
                            value={duracion} onChange={(duracion) => setDuracion(duracion)}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        <Slider
                            min={1} max={12}
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
                            <option>4</option>
                        </Select>
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