import { useState, useEffect } from "react";
import { HiCalendar, HiClock, HiOutlinePause } from "react-icons/hi";
import { MdOutlineNotStarted } from "react-icons/md"
import { AiOutlineFileDone } from "react-icons/ai"
import { Box, Flex, Text, Spacer, Tag, Button, Heading } from "@chakra-ui/react"
import Navbar from './Navbar';
import * as API from "../services/tareas";

export function MisTareas() {

  const API_URL="https://t-planifica.herokuapp.com";
  const [tareas, setTareas] = useState([]);
 
  useEffect(() => {
    API.getMisTareasAsignadasInacabadas().then(setTareas);
  }, []);


  async function getData() {
    let result = await fetch(`${API_URL}/tareas`);
    result = await result.json();
    setTareas(result);
  }

  async function TareaFinalizada(idTarea) {
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

    const myRequest = new Request(`${API_URL}/tarea/` + idTarea + '/finish', myInit);
    try {
      const response = await fetch(myRequest)
      getData();
      return await response.json();
    } catch (error) {
    }
  }

  async function TareaPausar(idTarea) {
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

    const myRequest = new Request(`${API_URL}/tarea/` + idTarea + '/pausar', myInit);
    try {
      const response = await fetch(myRequest)
      getData();
      return await response.json();
    } catch (error) {
    }
  }

  async function TareaEmpezar(idTarea) {
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

    const myRequest = new Request(`${API_URL}/tarea/` + idTarea + '/empezar', myInit);
    try {
      const response = await fetch(myRequest)
      getData();
      return await response.json();
    } catch (error) {
    }
  }

  return (
    <>
      <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
        <Navbar />
      </div>

      <Heading align="center" as="h1" size="2xl" m={4} >
        Mis Tareas 
      </Heading>

      <section>
        {tareas.map((tarea) => (
          < Box
            key={tarea.id}
            bg="yellow.200"
            p={2}
            m={2}
            borderRadius="lg"
          >
            <Flex>
              <Text fontSize="xl">
                <strong>Nombre: </strong>   {tarea.nombre}
                <br></br>
                <strong>Descripción:</strong>  {tarea.descripcion}
              </Text>
              <Spacer />
              <Tag p={3} colorScheme="yellow.200" >
              <Text fontSize="xl" mr={1} >
              <strong>Estado:</strong>
              </Text>
              </Tag>
              <Tag p={3} colorScheme="green" >
                {tarea.estado}
              </Tag>

            </Flex>
            <Flex align="center">
              <HiCalendar />
              <Text fontSize="lg" ml={1} top={5}  mr={6}>
                <strong> Fecha Inicio: {tarea.fechaInicio}</strong>
              </Text>

              <HiCalendar />
              <Text fontSize="lg" ml={2} mr={5}>
                <strong>Fecha Fin: {tarea.fechaFin}</strong>
              </Text>

              <HiClock />
              <Text fontSize="lg" ml={2} mr={5}>
                <strong>Duración: {tarea.duracion}</strong>
              </Text>

              <Text fontSize="lg" ml={2} mr={5}></Text>
              <strong>Prioridad: </strong>
              <Tag p={4} ml={3} colorScheme={tarea.priorizacion == 1 ? "red" : "blue"} >
                {tarea.priorizacion == 1 ? tarea.priorizacion : tarea.priorizacion}
              </Tag>

              <Button colorScheme='transparent' textColor='black' p={4} ml={16}  
                onClick={() => TareaEmpezar(tarea.id)} >
                <font size="5"> <MdOutlineNotStarted /> </font>
                <p> Empezar Tarea </p>
              </Button>          
              
              <Button colorScheme='transparent' textColor='black' p={4} ml={10}  
                onClick={() => TareaPausar(tarea.id)} >
                <font size="5"> <HiOutlinePause /> </font>
                <p> Pausar Tarea </p>
              </Button>

              <Button colorScheme='transparent' textColor='black' p={4} ml={10} mr={6} 
                onClick={() => TareaFinalizada(tarea.id)} >
                <font size="5"> <AiOutlineFileDone /> </font>
                <p> Finalizar Tarea </p>
              </Button>
            </Flex>
          </Box>
        ))}
      </section>
    </>
  )
}