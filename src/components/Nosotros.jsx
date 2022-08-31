import { Heading } from '@chakra-ui/react'
import Header from './Header'

export function Nosotros() {


    return (
        <>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <Header />
            </div>
            <Heading align="center" as="h1" size="2xl" m={4} p={4} >¿Quiénes Somos?</Heading>
            < Box bg="yellow.200" p={8} m={4} borderRadius="lg" >
                <h1> <font size="6"> <strong>Empresa</strong></font>
                <br></br>
                <font size="5"> T-Planifica es un servicio de planificación y gestión de tareas enfocado en el
                    entorno laboral, que se puede utilizar desde el ordenador hasta los dispositivos móviles.
                    <br></br>Puedes encontrarnos en: Escuela Técnica Superior de Ingeniería
                    Informática. Universidad de Sevilla. Avenida Reina Mercedes S/N. C.P. 41012 - Sevilla,10
                    Sevilla.
                    <br></br>
                    Para solicitar más información nos dudes en contactarnos a través del siguiente correo:  <a href="mailto:tplanifica.sa@gmail.com" className="hover:underline">tplanifica.sa@gmail.com</a>
                    </font> </h1>
            </Box>
        </>
    );
}