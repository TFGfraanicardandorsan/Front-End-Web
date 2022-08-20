import React, { useEffect } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useStateContext } from "../contents/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <Box>
        <button
            type="button"
            onClick={() => customFunc()}
            style={{ color }}
            className="relative text-xl rounded-full p-3"
        >
            <span
                style={{ background: dotColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
            {icon}
        </button>
    </Box>
)
const Header = () => {
    const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 900) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    return (
        <div className="flex justify-between p-2 md:mx-6 relative">
            <NavButton title="Menu" customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color="black" icon={<AiOutlineMenu />} />

            <div className="flex">
                <Box>
                    <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
                        <Link to='/login' >
                            <Button colorScheme='black' bg='yellow.200' variant='outline' borderColor='black' focusBorderColor='black' borderRadius={40} size='lg'>
                                Iniciar Sesión
                            </Button>
                        </Link>
                        <Link to='/register' >
                            <Button colorScheme='black' bg='yellow.200' variant='outline' borderColor='black' focusBorderColor='black' borderRadius={40} size='lg'>
                                Registrarse
                            </Button>
                        </Link>
                    </div>
                </Box>
            </div>
        </div>
    );
};
export default Header