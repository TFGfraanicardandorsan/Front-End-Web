import { useState, useEffect } from "react";
import { HiCalendar, HiClock } from "react-icons/hi";
import { MdOutlineAutoDelete } from "react-icons/md"
import { Box, Flex, Text, Spacer, Tag, Button, Heading, Image, Select } from "@chakra-ui/react"
import * as API from "../services/tareas";
import Navbar from './Navbar';
import * as APP from '../services/equipos'

export function Tareas() {

  const [tareas, setTareas] = useState([]);
  const [equipos, setEquipos] = useState([]);
  const [equipoId, setEquipoId] = useState('');

  useEffect(() => {
    API.getAllTareas().then(setTareas);
  }, []);

  useEffect(() => {
    APP.getEquiposAdministrados().then(setEquipos);
  }, [])

  function borrarTarea(id) {
    fetch('https://t-planifica.herokuapp.com/borrarTarea/' + id, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${token}` }
      }
    }).then(() => {
      console.log('Borrar tarea');
      getData();
    })
  }

  const API_URL = 'https://t-planifica.herokuapp.com'
  async function asignarTareaEquipo(idTarea, idEquipo) {
    const jwt = window.sessionStorage.getItem('jwt');
    const myHeader = new Headers({
      "Authorization": `Bearer ${jwt}`
    });

    const myInit = {
      method: 'GET',
      headers: myHeader,
      mode: 'cors',
      cache: 'default'
    };

    const myRequest = new Request(`${API_URL}/tarea/` + idTarea + '/asociar/' + idEquipo, myInit);
    try {
      const response = await fetch(myRequest)
      return await response.json();
    } catch (error) {
    }
  }

  async function getData() {
    let result = await fetch('https://t-planifica.herokuapp.com/tareas');
    result = await result.json();
    setTareas(result);
  }

  return (
    <>
      <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
        <Navbar />
      </div>

      <Heading align="center" as="h1" size="2xl" m={4} >
        Tareas
      </Heading>


      <section>
        {tareas.map((tarea) => (
          < Box
            key={tarea.id}
            bg="yellow.200"
            p={4}
            m={4}
            borderRadius="lg"
          >
            <Flex>
              <Text fontSize="2xl">
                <strong>Nombre</strong> :  {tarea.nombre}
                <br></br>
                <strong>Descripción</strong> : {tarea.descripcion}
                <br></br>
              </Text>
              <Spacer />
              <Tag p={4} colorScheme="green" >
                {tarea.estado}
              </Tag>

            </Flex>
            <Flex align="center">
              <HiCalendar />
              <Text fontSize="lg" ml={1} p={2} mr={6}>
                <strong>{tarea.fechaInicio}</strong>
              </Text>

              <HiCalendar />
              <Text fontSize="lg" ml={2} mr={5}>
                <strong>{tarea.fechaFin}</strong>
              </Text>

              <HiClock />
              <Text fontSize="lg" ml={2} mr={5}>
                <strong>{tarea.duracion}</strong>
              </Text>

              <Text><h1><strong>Prioridad</strong></h1></Text>
              <Tag p={4} ml={3} colorScheme="orange" >
                {tarea.priorizacion}
              </Tag>

              <Button colorScheme='transparent' textColor='black' p={4} ml={5} mr={6} top={1}
                onClick={() => borrarTarea(tarea.id)} >
                <MdOutlineAutoDelete />
              </Button>

              <Select placeholder='Selecciona una opción' borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' bg='yellow.200'
                onChange={(e) => setEquipoId(e.target.value)} >
                {equipos.map((equipo) => (
                  <option key={equipo.id} value={equipo.id}>{equipo.nombre}</option>
                ))}
              </Select>
                
              <Button colorScheme='black' variant='outline' borderColor='black' ml={3} focusBorderColor='black' borderRadius={40} size='lg'
                onClick={() => asignarTareaEquipo(tarea.id, equipoId)} >
                Asociar
              </Button>
            </Flex>
          </Box>
        ))}
      </section>
    </>
  )
}