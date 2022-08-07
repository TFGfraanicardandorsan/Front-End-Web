import { useState, useEffect } from "react";
import { Box, Flex, Text, Spacer, Heading } from "@chakra-ui/react"
import * as API from "../services/equipos";
import Navbar from './Navbar';

export function MisEquipos() {

  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    API.getMisEquipos().then(setEquipos);
  }, []);

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
              <Spacer />
            </Flex>
          </Box>
        ))}
      </section>
    </>
  )
}