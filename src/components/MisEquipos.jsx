import { useState, useEffect } from "react";
import {
  Box, Flex, Text, Spacer, Heading, Button, Select, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, useDisclosure
} from "@chakra-ui/react"
import { BsClipboardPlus, BsPersonPlus } from "react-icons/bs"
import { RiUserSearchFill } from "react-icons/ri"
import * as API from "../services/equipos";
import Navbar from './Navbar';


export function MisEquipos() {

  const API_URL = 'https://t-planifica.herokuapp.com'
  const [equipos, setEquipos] = useState([]);
  const [data, setData] = useState([]);
  const [managers, setManagers] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    API.getMisEquipos().then(setEquipos);
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
          console.log(json);
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
          console.log(json);
          setManagers(json);
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
                <strong>Usuario</strong> : {equipo.creador.username}
                <br></br>
                <strong>Nombre y Apellidos</strong> : {equipo.creador.nombre} {equipo.creador.apellidos}
                <br></br>
                <strong>Email</strong> : {equipo.creador.email}
                <br></br>
                <strong>Hora de Inicio de Trabajo</strong> : {equipo.creador.horaInicioTrabajar}
                <br></br>
                <strong>Hora de Finalizción de Trabajo</strong> : {equipo.creador.horaFinTrabajar}
                <br></br>
                <strong>Equipo</strong> : {equipo.creador.equipo}
                <br></br>
                <strong>Asociados</strong> : {equipo.asociados.map((item, i) => (
                  <text key={i}>
                    {item.nombre} {item.apellidos} ;
                  </text>
                ))}
                <br></br>
                <strong>Managers</strong> : {equipo.managers.map((item, i) => (
                  <text key={i}>
                    {item.nombre} {item.apellidos} ;
                  </text>
                ))}
              </Text>

              <Button onClick={() => { getEncontrarCompaneros(equipo.id); onOpen(); }} > <font size="6"><RiUserSearchFill /></font> Compañeros</Button>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Compañeros</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    {data.map((item) => (
                      <li key={item.id} >
                        {item.nombre} {item.apellidos}
                      </li>
                    ))}
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme='yellow' mr={3} onClick={onClose}>
                      Cerrar
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Spacer/>
              {/* <Button onClick={() => { encontrarManagers(equipo.id); onOpen(); }} > <font size="6"><RiUserSearchFill /></font> Managers</Button>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Managers</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    {managers.map((item) => (
                      <li key={item.id} >
                        {item.nombre} {item.apellidos}
                      </li>
                    ))}
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme='yellow' mr={3} onClick={onClose}>
                      Cerrar
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal> */}
              <Spacer />
            </Flex>
          </Box>
        ))}
      </section>
    </>
  )
}