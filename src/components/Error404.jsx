import { Heading, Box } from '@chakra-ui/react'
import Header from './Header'
import { Link } from 'react-router-dom';

export function Error404() {


    return (
        <>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <Header />
            </div>
            <Heading align="center" as="h1" size="2xl" m={4} p={4} >¿Buscas algo?</Heading>
            < Box bg="yellow.200" p={8} m={4} borderRadius="lg" >
             
               <text>Lo sentimos. La dirección web que has especificado no es una página activa de nuestra web. </text>
               <Link to='/' >
                                    <a className="hover:underline ">Ir a la página de T-Planifica</a>
                                </Link>
            </Box>
        </>
    );
}