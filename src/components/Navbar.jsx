import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { FiShoppingCart } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Avatar, AvatarBadge, AvatarGroup, Box, Text } from '@chakra-ui/react';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from "../contents/ContextProvider";
import * as APP from "../services/usuarios";



const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <Box>
        <button type="button" onClick={customFunc} style={{ color }}
            className="relative text-xl rounded-full p-3"
        >
            <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
            {icon}
        </button>
    </Box>
)
const Navbar = () => {
    const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useStateContext();

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


    // const [usuarios, setUsuarios] = useState([]);
    // useEffect(() => {
    //     APP.getMisDatos().then(setUsuarios);
    // }, []);

    return (
        <div className="flex justify-between p-2 md:mx-6 relative">
            <NavButton title="Menu" customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color="black" icon={<AiOutlineMenu />} />

            <div className="flex">
                <NavButton title="Cart" dotColor="yellow" customFunc={() => handleClick('cart')} color="black" icon={<FiShoppingCart />}
                />

                <NavButton title="Chat" dotColor="yellow" customFunc={() => handleClick('chat')} color="black" icon={<BsChatLeft />}
                />

                <NavButton title="Notification" dotColor="yellow" customFunc={() => handleClick('notification')} color="black" icon={<RiNotification3Line />}
                />

                <div className="flex items-center gap-2 cursor-pointer p-1" onClick={() => handleClick('userProfile')}>
                    <span>
                        {/* {usuarios.map((usuario) => ( */}
                             {/* <text key={usuario.id}>  */}
                                {/* <Avatar name='' bg="transparent" src={tarea.descripcion} size='lg' top={1} mr={1} /> */}
                                 {/* <span className="text-black-400 font-bold text-16 align-bottom" >Hola, {usuario.username}</span>  */}
                             {/* </text>  */}
                         {/* ))}  */}
                    </span>
                    <MdKeyboardArrowDown />
                </div>
                {isClicked.cart && <Cart />}
                {isClicked.chat && <Chat />}
                {isClicked.notification && <Notification />}
                {isClicked.userProfile && <UserProfile />}
            </div>
        </div>
    )
}
export default Navbar