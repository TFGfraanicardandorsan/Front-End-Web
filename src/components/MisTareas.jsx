import { useState, useEffect } from "react";
import { HiCalendar, HiClock } from "react-icons/hi";
import { MdOutlineAutoDelete } from "react-icons/md"
import { BsClipboardPlus, BsPersonPlus } from "react-icons/bs"
import { Box, Flex, Text, Spacer, Tag, Button, Heading, Image, Select } from "@chakra-ui/react"
import Navbar from './Navbar';
import * as API from "../services/tareas";
import * as APP from '../services/equipos'

export function MisTareas() {

  const API_URL = 'https://t-planifica.herokuapp.com'
  const [tareas, setTareas] = useState([]);
 
  useEffect(() => {
    API.getMisTareasRelacionadas().then(setTareas);
  }, [])

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
                <font size="6"><MdOutlineAutoDelete /></font>
              </Button>

              <Select placeholder='Selecciona una opción' borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' bg='yellow.200'
                onChange={(e) => setEquipoId(e.target.value)} >
                {equipos.map((equipo) => (
                  <option key={equipo.id} value={equipo.id}>{equipo.nombre}</option>
                ))}
              </Select>
                
              <Button colorScheme='transparent' textColor='black' p={4} ml={5} mr={6} top={1}
                onClick={() => asignarTareaEquipo(tarea.id, equipoId)} >
                <font size="6"><BsClipboardPlus  /></font>
              </Button>

              <Button colorScheme='transparent' textColor='black' p={4} ml={5} mr={6} top={1}
                onClick={() => asignarTareaUsuario(tarea.id, tarea.creator.id)} >
                <font size="6"> <BsPersonPlus /></font>
              </Button>

            </Flex>
          </Box>
        ))}
      </section>
    </>
  )
}