import { useState, useEffect } from "react";
import { HiCalendar, HiClock, HiOutlineX } from "react-icons/hi";
import { Box, Flex, Text, Spacer, Tag, Button, Heading } from "@chakra-ui/react"
import { BsJournalCheck } from "react-icons/bs";
import Navbar from './Navbar';
import * as APP from '../services/invitaciones'

export function MisInvitaciones() {

  const API_URL = "https://t-planifica.herokuapp.com"
  const [invitaciones, setInvitaciones] = useState([]);


  useEffect(() => {
    APP.getMisInvitaciones().then(setInvitaciones);
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

    const myRequest = new Request(`${API_URL}/invitaciones`, myInit);
    try {
      let response = await fetch(myRequest)
      response = await response.json();
      setInvitaciones(response);
    } catch (error) {
      console.error(error);
    }
  }


  async function AceptarInvitacion(id) {
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

    const myRequest = new Request(`${API_URL}/invitaciones/` + id + '/aceptar', myInit);
    try {
      const response = await fetch(myRequest)
      getData();
      return await response.json();
    } catch (error) {
    }
  }


  async function RechazarInvitación(id) {
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

    const myRequest = new Request(`${API_URL}/invitaciones/` + id + '/rechazar', myInit);
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
        Invitaciones
      </Heading>


      <section>
        {invitaciones.map((invitacion) => (
          < Box
            key={invitacion.id}
            bg="yellow.200"
            p={4}
            m={4}
            borderRadius="lg"
          >
            <Flex>
              <Text fontSize="2xl">
                <strong>Nombre</strong> :  {invitacion.equipo.creador.nombre} {invitacion.equipo.creador.apellidos}
                <br></br>
                <strong>Equipo</strong> : {invitacion.equipo.nombre}
                <br></br>
              </Text>
              <Spacer />
              <Tag p={4} colorScheme="green" >
                {invitacion.estado}
              </Tag>

            </Flex>
            <Flex align="down">

              <Button colorScheme='transparent' textColor='black' p={4} ml={5} mr={6} top={1}
                onClick={() => AceptarInvitacion(invitacion.id)} >
                <font size="5"><BsJournalCheck /></font>
                <p> Aceptar invitación </p>
              </Button>

              <Button colorScheme='transparent' textColor='black' p={4} ml={5} mr={6} top={1}
                onClick={() => RechazarInvitación(invitacion.id)} >
                <font size="5"> <HiOutlineX /></font>
                <p> Rechazar invitación </p>
              </Button>
            </Flex>
            
          </Box>
        ))}
      </section>
    </>
  )
}