import { useState, useEffect } from "react";
import { HiCalendar } from "react-icons/hi";
import { BsClipboardPlus, BsPersonPlus } from "react-icons/bs"
import { Box, Flex, Text, Spacer, Tag, Button, Heading, Select } from "@chakra-ui/react"
import Navbar from './Navbar';
import * as APP from '../services/equipos'

export function AsignacionTareas() {

  const API_URL = 'https://t-planifica.herokuapp.com'
  const [tareas, setTareas] = useState([]);
  const [equipos, setEquipos] = useState([]);
  const [equipoId, setEquipoId] = useState('');
  const [usuario, setUsuario] = useState([]);
  const [usuarioId, setUsuarioId] = useState([]);
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
    const fetchAsignarTareas = async () => {
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
    fetchAsignarTareas()
  }, [])

  useEffect(() => {
    APP.getEquiposAdministrados().then(setEquipos);
  }, [])

  async function getEncontrarCompaneros(equipoId) {
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

    const myRequest = new Request(`${API_URL}/` + equipoId + '/partners', myInit);
    try {
      await fetch(myRequest)
        .then((response) => response.json())
        .then((json) => {
          setUsuarioId(json);
        });
    } catch (error) {
    }
  }

  async function getData() {
    let result = await fetch(`${API_URL}/tareas`);
    result = await result.json();
    setTareas(result);
  }


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


  async function asignarTareaUsuario(idTarea, idUsuario) {
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

    const myRequest = new Request(`${API_URL}/tarea/` + idTarea + '/asignar/' + idUsuario, myInit);
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
        Asignación de Tareas
      </Heading>


      <section>
        {currentPosts.map((tarea) => (
          < Box
            key={tarea.id}
            bg="yellow.200"
            p={4}
            m={4}
            borderRadius="lg"
          >
            <Flex>
              <Text fontSize="xl">
                <strong>Nombre</strong> :  {tarea.nombre}
                <br></br>
                <strong>Descripción</strong> : {tarea.descripcion}
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
              <Text fontSize="lg" ml={1} p={2} mr={6}>
                <strong>Fecha Asignada: {tarea.fechaHoraAsignada == null ? 'No ha sido asignada una hora todavía' : tarea.fechaHoraAsignada.split("T")[0]
                  + ' ' + tarea.fechaHoraAsignada.split("T")[1].split(":")[0] + ":" + tarea.fechaHoraAsignada.split("T")[1].split(":")[1]}
                </strong>
              </Text>

              <Text fontSize="xl">
                <Select placeholder='Selecciona una opción' borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' bg='yellow.200'
                  onChange={(e) => setEquipoId(e.target.value)} >
                  {equipos.map((equipo) => (
                    <option key={equipo.id} value={equipo.id}>{equipo.nombre}</option>
                  ))}
                </Select>
              </Text>
              <Button colorScheme='transparent' textColor='black' p={4} mr={3}
                onClick={() => asignarTareaEquipo(tarea.id, equipoId)} >
                <font size="5">< BsClipboardPlus /></font>
                <p> Asignar Equipo </p>
              </Button>

              <Text fontSize="xl">
                <Select placeholder='Selecciona una opción' borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' bg='yellow.200' ml={2}
                  onClick={() => getEncontrarCompaneros(equipoId)}
                  onChange={(e) => setUsuario(e.target.value)}>
                  {usuarioId.map((usuarios) => (
                    <option key={usuarios.id} value={usuarios.id}>{usuarios.nombre}</option>
                  ))}
                </Select>
              </Text>
              <Button colorScheme='transparent' textColor='black' p={4} mr={3}
                onClick={() => asignarTareaUsuario(tarea.id, usuario)} >
                <font size="5"> <BsPersonPlus /> </font>
                <p> Asignar Usuario </p>
              </Button>
            </Flex>
          </Box>
        ))}
      </section>
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