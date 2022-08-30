import { Heading, Box } from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md';
import Header from './Header'
import { List, ListItem, ListIcon } from '@chakra-ui/react'

export function Cookies() {
    
    return (
        <>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <Header />
            </div>
            <Heading align="center" as="h1" size="2xl" m={4} p={4} >Privacidad del Usuario</Heading>
            < Box bg="yellow.200" p={8} m={4} borderRadius="lg" >
                <h1>  <center><font size="6"> <strong>Garantía de privacidad</strong></font></center>
                    <br></br>
                    <p >El presente documento recogerá las actuaciones de T-Planifica y sus servicios para garantizar la protección de los datos de sus usuarios que nos ofrece al sistema.</p>
                    <br></br>
                    <center><font size="5"> <strong>1. Responsables de la Información Personal</strong></font></center>
                    <p>Toda la información personal que facilite o se recoja a través de T-Planifica será tratada principalmente por T-Planifica SA. La sociedad mencionada tiene su domicilio social en la Escuela Técnica Superior de Ingeniería Informática, Universidad de Sevilla, 41012 Sevilla, España.</p>
                    <br></br>
                    <center><font size="5"> <strong>2. ¿Qué datos personales de sus clientes recopila T-Planifica?</strong></font></center>
                    <p>La información personal que recabamos de nuestros clientes nos ayuda a personalizar y mejorar continuamente el servicio que ofertamos en T-Planifica. En general, utilizamos la información para gestionar.
                        También hacemos uso de esta información para mejorar nuestra tienda y nuestra plataforma, así como para prevenir o detectar fraudes o abusos en nuestro sitio web, y para permitir a terceras partes llevar a cabo el soporte técnico, logístico u otras funciones en nuestro nombre.
                        Estos son los tipos de información que recopilamos:</p>
                    <br></br>

                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Información que usted nos facilita: Recibimos y almacenamos toda la información que usted introduce en nuestra web o que nos facilita de cualquier otro modo. Puede elegir no facilitar cierta información, pero si así lo hace, no podrá disfrutar de muchas de las funciones que le ofrecemos. La información que usted nos facilita nos es útil para responder a sus peticiones, mejorar nuestro servicio y ponernos en contacto con usted.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Información automática: Cada vez que usted interactúa con nosotros, recibimos y almacenamos ciertos tipos de información. Por ejemplo, al igual que muchos otros servicios y webs, almacenamos cookies para recabar cierta información cuando su navegador de Internet accede a T-Planifica.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Comunicaciones por correo electrónico: Para ayudarnos a hacer que los correos electrónicos que enviamos sean más útiles e interesantes, habitualmente recibimos una confirmación cuando usted abre un correo electrónico que le ha enviado T-Planifica, en el caso de que su dispositivo soporte este tipo de tareas. Además de un esfuerzo por evitar el envío de mensajes innecesarios a nuestros usuarios. Si no desea recibir más correos electrónicos ni notificaciones por parte de T-Planifica póngase en contacto con nosotros para dejar de recibir notificaciones del servicio que no sean estrictamente necesarias.
                        </ListItem>
                        {/* You can also use custom icons from react-icons */}
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Información recabada por otras fuentes: Es posible que recibamos información sobre usted de otras fuentes y la añadamos a nuestra información de su cuenta.
                        </ListItem>
                    </List>

                    <br></br>
                    <center><font size="5"> <strong>3. Información sobre las Cookies</strong></font></center>
                    <p>Utilizamos cookies con el fin de permitir a nuestro sistema reconocer su dispositivo y poder prestarle nuestros servicios.</p>
                    <br></br>
                    <center><font size="5"> <strong>4. ¿Comparte T-Planifica la información que recaba?</strong></font></center>
                    <p>La información relativa a nuestros clientes es una parte fundamental y primordial de nuestro negocio y no participamos en el negocio de la venta de esta a terceros. T-Planifica comparte su información sólo del modo descrito a continuación y siguen al menos unas prácticas tan protectoras como las que se describen en la presente Política de Privacidad.</p>
                    <br></br>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            <strong>Terceros proveedores de servicios:</strong> Contratamos a otras sociedades y personas para realizar ciertas funciones para nosotros o en nuestro nombre. Algunas funciones que pueden realizar es la gestión el despliegue del servicio y gestión de ciertos cobros con tarjetas de crédito. Tendrán acceso a la información personal para realizar sus funciones, pero no podrán utilizarla para cualquier otro fin. Además deberán tratar la información de conformidad con la presente Política de Privacidad y la legislación aplicable en materia de protección de datos.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            <strong>Con su consentimiento:</strong> Aparte de lo establecido anteriormente, se le informará en el caso de que cualquier información sobre usted se ponga en conocimiento de terceras partes, al objeto de que tenga la oportunidad de decidir que no se comparta su información.
                        </ListItem>
                    </List>
                    <br></br>
                    <center><font size="5"> <strong>5. Derecho al olvido</strong></font></center>
                    <p>T-Planifica garantiza la total y completa eliminación de los datos personales del usuario que así lo solicite. Para ello tenfrá que ponerse en contacto con T-Planifica a través de su cuenta de correo con el asunto Eliminacion de mis datos adjuntando sus datos identificativos (nombre de usuario y correo electrónico). Este proceso no se puede deshacer y no podrá regenerar su cuenta por lo que la tendrá que volver a crear.</p>
                </h1>
            </Box>
        </>
    );
}