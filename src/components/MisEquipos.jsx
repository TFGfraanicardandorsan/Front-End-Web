import { useState, useEffect } from "react";
import { Box, Flex, Text, Spacer, Heading, Button, Popover,PopoverTrigger,PopoverContent,PopoverHeader,PopoverBody,PopoverArrow,
PopoverCloseButton, Portal } from "@chakra-ui/react"
import { RiUserSearchFill } from "react-icons/ri"
import Navbar from './Navbar';


export function MisEquipos() {

  const API_URL = 'https://t-planifica.herokuapp.com'
  const [equipos, setEquipos] = useState([]);
  const [data, setData] = useState([]);
  const [managers, setManagers] = useState([]);
  const [asociados, setAsociados] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = equipos.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = pageNumber => setCurrentPage(pageNumber)

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(equipos.length / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  useEffect(() => {
    const fetchEquipos = async () => {
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

      const myRequest = new Request(`${API_URL}/misEquipos`, myInit);
      setLoading(true);
      await fetch(myRequest)
        .then((response) => response.json()).then((json) => {
          setEquipos(json);
          setLoading(false)
        })
    }
    fetchEquipos()
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
          setData(json);
        });
    } catch (error) {
    }
  }

  async function encontrarManagers(idEquipo) {
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

    const myRequest = new Request(`${API_URL}/` + idEquipo + '/managers', myInit);
    try {
      await fetch(myRequest)
        .then((response) => response.json())
        .then((json) => {
          setManagers(json);
        });
    } catch (error) {
    }
  }

  async function encontrarAsociados(idEquipo) {
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

    const myRequest = new Request(`${API_URL}/` + idEquipo + '/asociados', myInit);
    try {
      await fetch(myRequest)
        .then((response) => response.json())
        .then((json) => {
          setAsociados(json);
        });
    } catch (error) {
    }
  }

  return (
    <>
      <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
        <Navbar />
      </div>
      <Heading align="center" as="h1" size="2xl" m={4} >
        Mis Equipos
      </Heading>
      <section>
        {currentPosts.map((equipo) => (
          < Box
            key={equipo.id}
            bg="yellow.200"
            p={4}
            m={4}
            borderRadius="lg"
          >
            <Flex>
              <Text fontSize="2xl">
                <strong>Nombre</strong> :  {equipo.nombre}
                <br></br>
                <strong>Creador</strong> : {equipo.creador.nombre} {equipo.creador.apellidos}
                <br></br>
                <strong>Email</strong> : {equipo.creador.email}
                <br></br>
              </Text>
              <Spacer />
              <Popover>
                <PopoverTrigger>
                  <Button onClick={() => getEncontrarCompaneros(equipo.id)} ><font size="6"><RiUserSearchFill /></font> Compañeros</Button>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader><font size="5"><strong>Compañeros</strong></font></PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      {data.map((item) => (
                        <li key={item.id} >
                          {item.nombre} {item.apellidos} | {item.email}
                        </li>
                      ))}
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              </Popover>
              <Spacer />
              <Popover>
                <PopoverTrigger>
                  <Button onClick={() => encontrarManagers(equipo.id)} ><font size="6"><RiUserSearchFill /></font> Managers</Button>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader><font size="5"><strong>Managers</strong></font></PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      {managers.map((item) => (
                        <li key={item.id} >
                          {item.nombre} {item.apellidos} | {item.email}
                        </li>
                      ))}
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              </Popover>
              <Spacer />

              <Popover >
                <PopoverTrigger>
                  <Button mr={112} onClick={() => encontrarAsociados(equipo.id)} ><font size="6"><RiUserSearchFill /></font> Asociados</Button>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader><font size="5"><strong>Asociados</strong></font></PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      {asociados.map((item) => (
                        <li key={item.id} >
                          {item.nombre} {item.apellidos}
                        </li>
                      ))}
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              </Popover>
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