import { Heading, Box } from '@chakra-ui/react'
import { MdCancel, MdCheckCircle } from 'react-icons/md';
import Header from './Header'
import { List, ListItem, ListIcon } from '@chakra-ui/react'

export function Condiciones() {

    return (
        <>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <Header />
            </div>
            <Heading align="center" as="h1" size="2xl" m={4} p={4} >Aviso de Términos y Condiciones del servicio</Heading>
            < Box bg="yellow.200" p={4} m={4} borderRadius="lg" >
                <h1>  <center><font size="6"> <strong>Términos y condiciones</strong></font></center>
                    <br></br>
                    <p >El presente documento tiene por objetivo recoger los términos y condiciones al que el usuario acepta desde el momento en el que hace uso del servicio T-Planifica, rogamos que el usuario lea detenidamente las presentes condiciones puesto que desde el momento en el que se registra en el servicio está sujeto a estas.</p>
                    <br></br>
                    <center><font size="5"> <strong>1. Comunicaciones electrónicas</strong></font></center>
                    <p>Cada vez que utilices T-Planifica o nos envíes un correo electrónico, un mensaje de texto (SMS) o cualquier otro tipo de comunicación desde tu ordenador o dispositivo móvil, estarás comunicándote electrónicamente con nosotros. Nosotros nos pondremos en contacto contigo con electrónicamente por distintos medios, como por ejemplo correo electrónico, mensajes de texto (SMS), notificaciones dentro de la aplicación, o publicando mensajes o comunicaciones por correo electrónico en el sitio web. A efectos del presente contrato, aceptas que todos los contratos, avisos y otras notificaciones y comunicaciones que te enviemos por medios electrónicos satisfacen cualquier requisito de forma escrita, salvo que cualquier legislación aplicable con carácter imperativo exigiera una forma distinta de comunicación.</p>
                    <br></br>
                    <center><font size="5"> <strong>2. Tu cuenta</strong></font></center>
                    <p>Para utilizar algunos de los servicios de T-Planifica, es necesario estar registrado con tu cuenta. <br></br>
                        Cuando utilizas los Servicios de T-Planifica eres responsable de mantener la confidencialidad de los datos de tu cuenta y contraseña, así como de restringir el acceso a tu ordenador y otros dispositivos. En la medida en que así lo permita la legislación aplicable, aceptas asumir la responsabilidad que proceda por todas las actividades realizadas desde tu cuenta o utilizando tu contraseña. Deberás tomar todas las medidas necesarias a efectos de asegurar y salvaguardar la confidencialidad de tu contraseña, y deberás informarnos inmediatamente en caso de que tengas motivos para creer que tu contraseña ha sido puesta en conocimiento de un tercero, o si ésta ha sido utilizada de manera no autorizada o es susceptible de serlo. Es tu responsabilidad comprobar que los datos que nos facilitas son correctos y completos, quedando asimismo obligado a informarnos inmediatamente cuando tenga lugar cualquier variación en la información que nos has facilitado. Puedes acceder a tu información y actualizarla a través del apartado Mi Perfil del sitio web.<br></br>
                        No podrás utilizar ningún servicio de T-Planifica:</p>
                    <br></br>

                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={MdCancel} color='red.500' />
                            En firma alguna que cause, o pueda causar, daño o perjuicio a algún de los servicios de T-Planifica o la interrupción del acceso de este.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCancel} color='red.500' />
                            Cualquier fin fraudulento, ni a efectos de la comisión de delito alguno u otra actividad ilícita de ningún otro tipo.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCancel} color='red.500' />
                            Para generar cualquier tipo de molestia, inconveniente o ansiedad en un tercero.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCancel} color='red.500' />
                            Información recabada por otras fuentes: Es posible que recibamos información sobre usted de otras fuentes y la añadamos a nuestra información de su cuenta.
                        </ListItem>
                    </List>
                    <br></br>
                    Nos reservamos el derecho de impedir el acceso a los Servicios de T-Planifica o de cancelar tu cuenta si tu comportamiento constituye un motivo justificado para hacerlo. Este será el caso en particular, si estás incumpliendo la normativa vigente, de las disposiciones contractuales aplicables, nuestras directrices o nuestras políticas a las que puede acceder en nuestro sitio web. A pesar de dicha limitación o cancelación seguirás teniendo acceso a los contenidos y servicios que hubieras adquirido hasta ese momento.
                    <br></br>
                    <center><font size="5"> <strong>3. Opiniones, comentarios, comunicaciones y otros contenidos</strong></font></center>
                    <p>Los usuarios podrán publicar sus opiniones y comentarios así como publicar otros contenidos, enviar comunicaciones, sugerencias, ideas, comentarios, preguntas y otra información, siempre que el contenido de las mismas no resulte ilícito, obsceno, abusivo, constituya un supuesto de amenaza o difamación, o invada la privacidad de terceros, infrinja derechos de propiedad intelectual o de cualquier otra forma que resulte ofensivo para terceros, infrinja derechos de propiedad intelectual o de cualquier otra forma resulte ofensivo para terceros o censurable, ni consista en o contenga virus informáticos, propaganda política o contenido publicitario, correos en cadena, envío masivo de correos o constituya cualquier otro tipo de “spam”. No está permitido el uso de direcciones de correo falsas, ni suplantar la identidad de otra persona o entidad, ni falsear de cualquier otro modo el origen de cualquier otro contenido. Nos reservamos el derecho a modificar o eliminar cualquier contenido. Si consideras que cualquier contenido de los Servicios de T-Planifica o cualquier servicio cuya venta estuviera publicitada en los mismos incluye cualquier afirmación difamatoria, o si entendieras que tus derechos de propiedad intelectual están siendo infringidos por cualquier elemento o información disponible en los Servicios de T-Planifica, te rogamos nos hagas saber dicha circunstancia a través de la cumplimentación y presentación del correspondiente Formulario de Aviso, al que responderemos.</p>
                    <br></br>
                    Si publicas opiniones, comentarios, preguntas o respuestas u otro contenido elaborado por ti para publicarlo en el sitio web nos otorgas:
                    <br></br>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Una licencia no exclusiva y gratuita de utilizar, reproducir publicar, poner a disposición, traducir y modificar tu contenido a todo el mundo (inclusive el derecho a sublicenciar esos derechos a terceros).
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            El derecho a utilizar el nombre facilitado por ti en relación con dicho contenido. La presente disposición no supone la transferencia de derecho moral alguno.
                        </ListItem>
                    </List>
                    <br></br>
                    Puedes elegir que tu contenido no sea público o, cuando sea posible, cambiar tus preferencias de manera que solo puedan ver tu contenido aquellas personas a las que concedas acceso.<br></br>
                    Declaras y garantizas ser titular o de cualquier otra forma controlar la totalidad de los derechos sobre el contenido que pudieras publicar, manifestando y garantizado asimismo que a la fecha de remisión de dicho contenido.
                    <br></br>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Dicho contenido y materiales exacto.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            La utilización de dicho contenido o material no supondrá incumplimiento alguno de las políticas o directrices aplicables de T-Planifica, ni supondrá incumplimiento alguno de la persona o entidad (garantizando asimismo que el contenido o material en cuestión no es de carácter difamatorio).
                        </ListItem>
                    </List>
                    <br></br>
                    Te comprometes a liberar a T-Planifica de cualesquiera reclamaciones presentadas por terceros contra T-Planifica derivadas de o en relación con dicho contenido y materiales, salvo en la medida en que dicha responsabilidad derive de la falta de supresión adecuada por nuestra parte de dicho contenido o material tras haber sido notificados del carácter ilícito del material.
                    <br></br>
                    <center><font size="5"> <strong>4. Reclamaciones sobre Propiedad Intelectual</strong></font></center>
                    <p>T-Planifica respeta la propiedad intelectual de terceros. Si consideras que tus derechas de propiedad intelectual han podido ser infringidos, te rogamos que hagas uso de nuestra Política y Procedimiento de Reclamaciones por Infracción.</p>
                    <br></br>
                    <center><font size="5"> <strong>5. Nuestra responsabilidad</strong></font></center>
                    <p>T-Planifica ni cualquier persona asociada a su grupo será responsable de:</p>
                    <br></br>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={MdCancel} color='red.500' />
                            Cualesquiera pérdidas que no fueran atribuibles a incumplimiento de alguno por su parte.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCancel} color='red.500' />
                            La utilización de dicho contenido o material no supondrá incumplimiento alguno de las políticas o directrices aplicables de T-Planifica, ni supondrá incumplimiento alguno de la persona o entidad (garantizando asimismo que el contenido o material en cuestión no es de carácter difamatorio).
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCancel} color='red.500' />
                            Cualesquiera de las pérdidas indirectas o de carácter consecuencial que no fuera razonablemente previsible por ambas partes en el momento en que se formalizó el contrato de compraventa de los servicios entre ambas partes.
                        </ListItem>
                    </List>
                    <br></br>
                    La legislación de algunos países pudiera no permitir en algunos o la totalidad de los límites de responsabilidad previstos anteriormente. En caso de que dicha legislación te fuera de aplicación, alguno o la totalidad de dichos límites pudieran no ser aplicables. Asimismo, dicha legislación pudiera conferirte derechos adicionales de los aquí previstos.
                    <br></br>
                    Nada de lo dispuesto en las en las presentes condiciones limita o excluye nuestra responsabilidad en caso de falsedad, ni por fallecimiento o daños personales atribuibles a nuestra negligencia o dolo.
                    <br></br>
                    Asimismo, T-Planifica no será responsable de ninguna demora o incumplimiento de sus obligaciones derivadas de las presentes condiciones si dicha demora o incumplimiento de sus obligaciones derivadas de las presentes condiciones si dicha demora o incumplimiento fuera atribuible a circunstancias ajenas a nuestro control razonable. Si la demora tuviera lugar con carácter anterior a la remisión del servicio, T-Planifica no cobrará importe alguno por dicho servicio hasta que el mismo fuera, al menos, parcialmente satisfecho, en cuyo caso podrás cancelar el servicio en cualquier momento previo a dicha expedición.
                    <br></br>
                    Los términos y condiciones de la garantía que T-Planifica ofrece sobre sus servicios varían en función de la persona que realiza uso del servicio: un “consumidor” o bien otra persona que “actúe con fines que entran en el marco de su actividad profesional”, de conformidad con lo dispuesto en la directiva 1999/44/CE del Parlamento Europeo y del Consejo.
                    <br></br>
                    Si adquieres el servicio en tu condición de “consumidor”, tienes derecho a la garantía de conformidad prevista en la legislación según la cual el servicio provisto ha de ser conforme al contrato, y a la que legalmente viene obligado el vendedor (Garantía Legal). Para más información sobre el ámbito, contenido e instrucciones para el ejercicio de esta Garantía Legal, te rogamos consultes nuestros Términos y Condiciones de la Garantía Legal o contactes con nuestro Servicio de Atención al Cliente.
                    <br></br>
                    T-Planifica no será responsable del cumplimiento de las obligaciones previstas ofrecidas por terceros.
                    <br></br>
                    <center><font size="5"> <strong>6. Ley Aplicable</strong></font></center>
                    <p>Las presentes condiciones se regirán e interpretarán de conformidad con las leyes de del Estado Español (a excepción de sus disposiciones sobre el conflicto de leyes). Ambas partes acordamos someternos a la jurisdicción no exclusiva de los tribunales de distrito del Estado Español, lo que significa que podrás reclamar tus derechos como consumidor en relación con los presentes Términos y Condiciones tanto en España como en ti Estado Miembro residencia de la Unión Europea. Si eres un consumidor y tienes tu residencia habitual en la Unión Europea también contarás con la protección que pueda ofrecerte cualquier disposición imperativa de la legislación de tu país de residencia.</p>
                    <br></br>
                    <p>La Comisión Europea ofrece una plataforma para la resolución alternativa de conflictos, a la cual puedes acceder aquí: <a href="https://ec.europa.eu/consumers/odr" className="hover:underline ">https://ec.europa.eu/consumers/odr</a>. Si quieres comunicarnos cualquier asunto puedes comunicarte de manera electrónica con nosotros.</p>
                    <br></br>
                    <center><font size="5"> <strong>7. Modificación de los términos y condiciones</strong></font></center>
                    <p>Nos reservamos el derecho de realizar cambios a nuestro sitio web, a nuestras políticas y a nuestros términos y condiciones, en cualquier momento. Quedarás sujeto a los términos y condiciones y nuestras políticas en vigor en el momento en el que accedas de nuevo a la web tras una comunicación electrónica, a menos que, por ley o por requerimiento de las autoridades, se deba hacer cambio a dichos términos y condiciones o políticas (en cuyo caso, tales cabios podrían resultar aplicables a cualquier transacción o uso del servicio anterior). Si alguna de las presentes condiciones fuera declarada inválida, nula o por cualquier causa ineficaz, dicha condición, se entenderá excluida sin que dicha declaración pueda afectar a la validez ni exigibilidad del resto de condiciones.</p>
                </h1>
            </Box>
        </>
    );
}