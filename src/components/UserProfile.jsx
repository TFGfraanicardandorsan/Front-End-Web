import React, { useEffect, useState } from "react";
import * as API from "../services/usuarios";
import { useStateContext } from '../contents/ContextProvider';
import { MdOutlineCancel } from 'react-icons/md';
import Button from './Button';
import { Link, NavLink } from 'react-router-dom';
import useUser from '../hooks/useUser'
import { Avatar, AvatarBadge, Box, Stack } from '@chakra-ui/react';

const UserProfile = () => {

    
    const { isLogged, logout } = useUser()

    const { currentColor } = useStateContext();

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        API.getMisDatos().then(setUsuarios);
    }, []);

    return (
        <>
            <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
                <div className="flex justify-between items-center">
                    <p className="font-semibold text-lg dark:text-gray-200">Mi Perfil</p>
                    <Button
                        icon={<MdOutlineCancel />}
                        color="rgb(153, 171, 180)"
                        bgHoverColor="light-gray"
                        size="2xl"
                        borderRadius="50%"
                    />
                </div>
                <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
                <Stack direction='row' spacing={4}>
                                <Avatar size="xl">
                                    <AvatarBadge boxSize='1.25em' bg='green.500' />
                                </Avatar>
                            </Stack>
                    <div>
                        <p className="font-semibold text-xl dark:text-gray-200"> {usuarios.nombre} {usuarios.apellidos} </p>
                        {/* <p className="text-gray-500 text-sm dark:text-gray-400">  {usuarios.apellidos}   </p> */}
                        <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> {usuarios.email} </p>
                    </div>
                </div>
                <div className="mt-5">
                    <Link to='#' onClick={logout}>
                        <Button
                            color="white"
                            bgColor={currentColor}
                            text="Cerrar Sesión"
                            borderRadius="10px"
                            width="full"
                        />
                    </Link>
                </div>
            </div>
        </>
    );
}
export default UserProfile;