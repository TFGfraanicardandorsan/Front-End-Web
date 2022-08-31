import { useState, useEffect } from "react";
import { HiCalendar, HiClock, HiOutlinePause } from "react-icons/hi";
import { MdOutlineNotStarted } from "react-icons/md"
import { AiOutlineFileDone } from "react-icons/ai"
import { Box, Flex, Text, Spacer, Tag, Button, Heading } from "@chakra-ui/react"
import Navbar from './Navbar';

export function MisTareas() {

  const API_URL = "https://t-planifica.herokuapp.com";
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = tareas.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = pageNumber => setCurrentPage(pageNumber)

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(tareas.length / postsPerPage); i++) {
    pageNumbers.push(i)
  }


  useEffect(() => {
    const fetchAsignadas = async () => {
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

      const myRequest = new Request(`${API_URL}/misTareasAsignadasUnfinished`, myInit);
      setLoading(true);
      await fetch(myRequest)
        .then((response) => (response.status == 200 ? response.json() : [])).then((json) => {
          setTareas(json);
          setLoading(false)
        })
    }
    fetchAsignadas()
  }, [])

  async function getData() {
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

    const myRequest = new Request(`${API_URL}/misTareasAsignadasUnfinished`, myInit);
    try {
      let result = await fetch(myRequest)
      result = (result.status == 200 ? await result.json() : [])
      setTareas(result);
    } catch (error) {
    }
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
        Mis Tareas asignadas
      </Heading>

      <section>
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
      <div className="absolute bottom-0 ml-8" >
        <div className="absolute inset-x-0 bottom-0 h-16 ">
          <nav ml={4} aria-label="Page navigation example">
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