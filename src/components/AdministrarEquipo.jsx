import { useState, useEffect } from "react";
import { HiOutlineX } from "react-icons/hi";
import { BsJournalCheck } from "react-icons/bs";
import {
  Select, Box, Flex, Text, Spacer, Heading, Button, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow,
  PopoverCloseButton, Portal
} from "@chakra-ui/react"
import { RiUserSearchFill } from "react-icons/ri"
import * as API from "../services/equipos";
import * as APP from "../services/usuarios";
import Navbar from './Navbar';


export function AdministrarEquipo() {

  const API_URL = 'https://t-planifica.herokuapp.com'
  const [equipos, setEquipos] = useState([]);
  const [data, setData] = useState([]);
  const [managers, setManagers] = useState([]);
  const [managerId, setManagerId] = useState([])
  const [asociados, setAsociados] = useState([])
  const [asociadoId, setAsociadoId] = useState([])
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    API.getEquiposAdministrados().then(setEquipos);
  }, []);

  useEffect(() => {
    APP.getMisDatos().then(setUsuario);
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

  async function ascenderManager(idEquipo, idUsuario) {
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

    const myRequest = new Request(`${API_URL}/equipo/` + idEquipo + '/volverManager/' + idUsuario, myInit);
    try {
      await fetch(myRequest)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
        });
    } catch (error) {
    }
  }

  async function descenderManager(idEquipo, idUsuario) {
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

    const myRequest = new Request(`${API_URL}/equipo/` + idEquipo + '/volveAsociado/' + idUsuario, myInit);
    try {
      await fetch(myRequest)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
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
        Administración de Equipos
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
            <Spacer />
            <Flex align="center" mr={8}>
              <Text fontSize="xl">
                <Select placeholder='Selecciona una opción' borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' bg='yellow.200'
                  onClick={() => encontrarAsociados(equipo.id)}
                  onChange={(e) => setAsociadoId(e.target.value)} >
                  {asociados.map((asociado) => (
                    <option key={asociado.id} value={asociado.id}>{asociado.nombre} {asociado.apellidos}</option>
                  ))}
                </Select>
              </Text>

              <Button colorScheme='transparent' textColor='black' p={4} mr={3}
                onClick={() => ascenderManager(equipo.id, asociadoId)} >
                <font size="5"><BsJournalCheck /></font>
                <p> Ascender a Manager </p>
              </Button>

              <Text fontSize="xl">
                <Select placeholder='Selecciona una opción' borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' bg='yellow.200'
                  onClick={() => encontrarManagers(equipo.id)}
                  onChange={(e) => setManagerId(e.target.value)} >
                  {managers.map((manager) => (
                    <option key={manager.id} value={manager.id}>{manager.nombre} {manager.apellidos}</option>
                  ))}
                </Select>
              </Text>
              <Button colorScheme='transparent' textColor='black' p={4} mr={3} 
                onClick={() => descenderManager(equipo.id, managerId)} >
                <font size="5"> <HiOutlineX /></font>
                <p> Volver Asociado </p>
              </Button>
            </Flex>
          </Box>
        ))}
      </section>
    </>
  )
}