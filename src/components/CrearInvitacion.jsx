import { useState, useEffect } from "react";
import { BsClipboardPlus, BsPersonPlus } from "react-icons/bs"
import {
  Box, Flex, Text, Spacer, Tag, Button, Heading, Image, Select, Input, FormControl, FormLabel, FormHelperText,
  FormErrorMessage
} from "@chakra-ui/react"
import Navbar from './Navbar';
import * as APP from '../services/equipos'
import * as API from '../services/usuarios'

export function CrearInvitacion() {

  const API_URL = 'https://t-planifica.herokuapp.com'
  const [equipos, setEquipos] = useState([]);
  const [equipoId, setEquipoId] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [input, setInput] = useState('')
  const handleInputChange = (e) => setInput(e.target.value)
  const isError = input === ''

  useEffect(() => {
    APP.getEquiposAdministrados().then(setEquipos);
  }, [])

  useEffect(() => {
    API.getMisDatos().then(setUsuarios);
  }, [])


  async function InvitarEquipo(idEquipo, email) {
    const jwt = window.sessionStorage.getItem('jwt');
    const myHeader = new Headers({
      "Authorization": `Bearer ${jwt}`
    });

    const myInit = {
      method: 'POST',
      headers: myHeader,
      mode: 'cors',
      cache: 'default'
    };

    const myRequest = new Request(`${API_URL}/equipo/` + idEquipo + '/invite/' + email, myInit);
    try {
      const response = await fetch(myRequest)
      //   getData();
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
        Nueva Invitación
      </Heading>


      <section>
        < Box
          key={usuarios.id}
          bg="yellow.200"
          p={4}
          m={4}
          borderRadius="lg"
        >

          <Flex align="center">
            <Text fontSize="2xl">
              <strong>Equipo:</strong>
            </Text>
            <Spacer />

            <Select placeholder='Selecciona una opción' borderColor='black' focusBorderColor='black' borderRadius={40} size='lg' bg='yellow.200' ml={4}
              onChange={(e) => setEquipoId(e.target.value)} >
              {equipos.map((equipo) => (
                <option key={equipo.id} value={equipo.id}>{equipo.nombre}</option>
              ))}
            </Select>

            <Button colorScheme='transparent' textColor='black' p={4} ml={5} mr={6} top={1}
              onClick={() => InvitarEquipo(equipoId, input)} >
              <font size="6"><BsClipboardPlus /></font>
            </Button>
          </Flex>
          <br></br>
          <FormControl isInvalid={isError}>
            <FormLabel>
              <Text fontSize="2xl">
                <strong>Correo Electrónico :</strong>
                <br></br>
              </Text>
            </FormLabel>
            <Input
              type='email'
              value={input}
              onChange={handleInputChange}
            />
            {!isError ? (
              <FormHelperText>
                Escriba el correo de la persona que quieras invitar
              </FormHelperText>
            ) : (
              <FormErrorMessage>El correo electrónico es obligatorio</FormErrorMessage>
            )}
          </FormControl>
        </Box>
      </section>
    </>
  )
}