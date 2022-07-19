import { useState, useEffect } from "react";
import { HiCalendar, HiClock } from "react-icons/hi";
import { MdOutlineAutoDelete } from "react-icons/md"
import { Box, Flex, Text, Spacer, Tag, Button, Heading, Image } from "@chakra-ui/react"
import * as API from "../services/tareas";

export function Tareas() {

  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    API.getAllTareas().then(setTareas);
  }, []);

    function borrarTarea(id){
      fetch (`https://t-planifica.herokuapp.com/borrarTarea/`+ id,{
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    }).then(() => {
      console.log('Borrar tarea');
      getData();
  })
  }

  async function getData() {
    let result = await fetch ("https://t-planifica.herokuapp.com/tareas");
    result= await result.json();
    setTareas(result);
  }

  return (
    <>
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
              <Tag p={4} colorScheme={tarea.terminada ? "green" : "red"} >
                {tarea.terminada ? "Finalizada" : "Sin Finalizar "}
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
            </Flex>
          </Box>
        ))}
      </section>
    </>
  )
}