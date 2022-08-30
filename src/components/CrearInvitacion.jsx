import { useState, useEffect } from "react";
import { BsClipboardPlus, BsPersonPlus } from "react-icons/bs"
import {
  Box, Flex, Text, Spacer, Tag, Button, Heading, Image, Select, Input, FormControl, FormLabel, FormHelperText,
  FormErrorMessage
} from "@chakra-ui/react"
import validator from 'validator'
import swal from 'sweetalert'
import Navbar from './Navbar';
import * as APP from '../services/equipos'
import * as API from '../services/usuarios'

export function CrearInvitacion() {

  const API_URL = 'https://t-planifica.herokuapp.com'
  const [equipos, setEquipos] = useState([]);
  const [equipoId, setEquipoId] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value

    if (validator.isEmail(email)) {
      setEmailError('Correo Electrónico válido')
      setEmail(email)
    } else {
      setEmailError('Correo Electrónico incorrecto')
    }
  }
  useEffect(() => {
    APP.getEquiposAdministrados().then(setEquipos);
  }, [])

  useEffect(() => {
    API.getMisDatos().then(setUsuarios);
  }, [])

    const mostrarAlerta = () => {
        swal ({
            title: "Se ha creado la invitación satisfactoriamente",
            icon: "success",
            button: "Aceptar"
        })
    }

    const mostrarRechazo = () => {
      swal ({
          title: "Ya pertenece a este equipo",
          icon: "error",
          button: "Aceptar"
      })
  }


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
      addEventListener((await response.text()).toString() == 'Ya pertenece a este equipo' ?  mostrarRechazo() : mostrarAlerta() )
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
              onClick={() => InvitarEquipo(equipoId, email)} >
              <font size="6"><BsClipboardPlus /></font>
            </Button>
          </Flex>
          <br></br>
          <FormLabel>
            <Text fontSize="2xl">
              <strong>Correo Electrónico :</strong>
            </Text>
          </FormLabel>
          <Input borderColor='black' focusBorderColor='black' borderRadius={40}
            size='lg' bg='yellow.200' type="email"
            onChange={(e) => validateEmail(e)} />
          <span style={{
            fontWeight: 'bold',
            color: 'black',
          }}>{emailError}
          </span>
        </Box>
      </section>
    </>
  )
}