import { useState, useEffect } from "react";
import { HiCalendar, HiClock } from "react-icons/hi";
import { MdOutlineAutoDelete } from "react-icons/md"
import { Box, Flex, Text, Spacer, Tag, Button, Heading } from "@chakra-ui/react"
import Navbar from './Navbar';

export function Tareas() {

  const API_URL = 'https://t-planifica.herokuapp.com'
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = tareas.slice(indexOfFirstPost, indexOfLastPost)

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(tareas.length / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  useEffect(() => {
    const fetchTareas = async () => {
      const myHeader = new Headers({
      });

      const myInit = {
        method: 'GET',
        headers: myHeader,
        mode: 'cors',
        cache: 'default'
      };

      const myRequest = new Request(`${API_URL}/tareas`, myInit);
      setLoading(true);
      await fetch(myRequest)
        .then((response) => response.json()).then((json) => {
          setTareas(json);
          setLoading(false)
        })
    }
    fetchTareas()
  }, [])

  function borrarTarea(id) {
    fetch(`${API_URL}/borrarTarea/` + id, {
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

  async function getData() {
    let result = await fetch(`${API_URL}/tareas`);
    result = await result.json();
    setTareas(result);
  }

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <>
      <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
        <Navbar />
      </div>

      <Heading align="center" as="h1" size="2xl" m={4} >
        Tareas
      </Heading>


      <ul>
        {currentPosts.map((tarea) => (
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
                <br></br>
                <strong>Fecha Asignada: {tarea.fechaHoraAsignada == null ? 'No ha sido asignada una hora todavía' : tarea.fechaHoraAsignada.split("T")[0]
                  + ' ' + tarea.fechaHoraAsignada.split("T")[1].split(":")[0] + ":" + tarea.fechaHoraAsignada.split("T")[1].split(":")[1]}
                </strong>
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
              <Text fontSize="lg" ml={1} top={5} mr={6}>
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
              <Button colorScheme='transparent' textColor='black' p={4} ml={5} mr={6} top={1}
                onClick={() => borrarTarea(tarea.id)} >
                <font size="5"><MdOutlineAutoDelete /></font>
                <p> Borrar Tarea </p>
              </Button>

            </Flex>
          </Box>
        ))}
      </ul>

      <br></br>
      <div className="absolute bottom-0 ml-8" >
        <div className="absolute inset-x-0 bottom-0 h-16 ">
          <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px">
              {pageNumbers.map(number => (
                <li key={number}>
                  <a onClick={() => paginate(number)} className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-black hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    {number}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}