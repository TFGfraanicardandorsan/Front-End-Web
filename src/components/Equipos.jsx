import { useState, useEffect } from "react";
import { Box, Flex, Text, Spacer, Heading, Button, Popover,PopoverTrigger,PopoverContent,PopoverHeader,PopoverBody,PopoverArrow,
PopoverCloseButton, Portal } from "@chakra-ui/react"
import { RiUserSearchFill } from "react-icons/ri"
import * as API from "../services/equipos";
import Navbar from './Navbar';

export function Equipos() {
  
  const API_URL = 'https://t-planifica.herokuapp.com'
  const [equipos, setEquipos] = useState([]);
  const [data, setData] = useState([]);
  const [managers, setManagers] = useState([]);
  const [asociados, setAsociados] = useState([])
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    API.getAllEquipos().then(setEquipos);
  }, []);

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
        Equipos
      </Heading>
      <section>
        {equipos.map((equipo) => (
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
    </>
  )
}