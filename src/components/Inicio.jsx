import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Spacer, Tag, Button } from "@chakra-ui/react";
import { HiCalendar, HiClock } from "react-icons/hi";
import { RiNotification3Line } from 'react-icons/ri';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { BsChatLeft } from 'react-icons/bs';
import Navbar from './Navbar';
import * as API from "../services/tareas";
import { IoIosMore } from 'react-icons/io';

export function Inicio() {

    // const API_URL = 'https://t-planifica.herokuapp.com'
    const [tareasHoy, setTareasHoy] = useState([]);
    const [tareasInacabadasHoy, setTareasInacabadasHoy] = useState([]);
    const valor = (((tareasHoy.length - tareasInacabadasHoy.length) / tareasHoy.length) * 100)

    useEffect(() => {
        API.getTareasHoy().then(setTareasHoy);
    }, []);

    useEffect(() => {
        API.getTareasHoyInacabadas().then(setTareasInacabadasHoy);
    }, []);

    return (
        <>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <Navbar />
            </div>
            <div className="mt-20">
                <div className="flex flex-wrap lg:flex-nowrap justify-center ">
                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-40 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
                        <div className="flex justify-between items-right">
                            <div>
                                <p className="font-bold text-white">Usuarios</p>
                                <p className="text-2xl text-white">40</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-40 rounded-xl w-full lg:w-80 p-8 pt-9 m-3  ">
                        <div className="flex justify-between items-right">
                            <div>
                                <p className="font-bold text-black">Notificaciones</p>
                                <p className="text-2xl text-black">40</p>
                            </div>
                            <RiNotification3Line size='30px'/>
                        </div>
                    </div>

                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-40 rounded-xl w-full lg:w-80 p-8 pt-9 m-3">
                        <div className="flex justify-between items-right">
                            <div>
                                <p className="font-bold text-black">Invitaciones</p>
                                <p className="text-2xl text-black">40</p>
                            </div>
                            <BsChatLeft size='30px'/>
                        </div>
                    </div>
                </div>

                <div className="flex gap-10 flex-wrap justify-center">
                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
                        <div className="flex justify-between">
                            <p className="font-semibold text-xl">Tareas para hoy</p>
                            <div className="flex items-center gap-4">
                            </div>
                        </div>
                        {/* PONER LA LISTA DE TAREAS DE HOY */} <h1>HOLA</h1>
                    </div>
                    <div>
                        <div
                            className=" bg-white rounded-2xl md:w-400 p-4 m-3"

                        >
                            <div className="flex justify-between items-center ">
                                <p className="font-semibold text-black text-2xl">Tareas</p>

                                <div>
                                    <p className="text-2xl text-black font-semibold mt-8">ALGO</p>
                                    <p className="text-black">ALGO</p>
                                </div>
                            </div>

                            <div className="mt-4">

                            </div>
                        </div>

                        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
                            <div>
                                <p className="text-2xl font-semibold ">Tareas Terminadas</p>
                                {/* <p className="text-gray-400">Yearly sales</p> */}
                            </div>

                            <div className="w-40">
                                <CircularProgress value={valor} color='yellow' max={100} min={0} size='140px'>
                                    <CircularProgressLabel> {valor}% </CircularProgressLabel>
                                </CircularProgress>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-10 m-4 flex-wrap justify-center">
                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
                        <div className="flex justify-between items-center gap-2">
                            <p className="text-xl font-semibold">Tareas por equipo</p>

                        </div>
                        <div className="mt-10 w-72 md:w-400">

                            <div className="flex justify-between mt-4">
                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                                    >
                                    </button>
                                    <div>
                                        <p className="text-md font-semibold"></p>
                                        <p className="text-sm text-gray-400"></p>
                                    </div>
                                </div>
                                {/* <p className={`text-${item.pcColor}`}>{item.amount}</p> */}
                            </div>

                        </div>
                        <div className="flex justify-between items-center mt-5 border-t-1 border-color">
                            <div className="mt-3">
                                <Button
                                    color="white"
                                    text="Add"
                                    borderRadius="10px"
                                />
                            </div>

                            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
                        </div>
                    </div>
                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
                        <div className="flex justify-between items-center gap-2 mb-10">
                            <p className="text-xl font-semibold">Tareas Inacabadas</p>
                        </div>
                        <div className="md:w-full overflow-auto">

                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center">
                    <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
                        <div className="flex justify-between">
                            <p className="text-xl font-semibold">Equipos</p>
                            <button type="button" className="text-xl font-semibold text-gray-400">
                                <IoIosMore />
                            </button>
                        </div>

                        <div className="border-b-1 border-color pb-4 mt-2">
                            <p className="text-md font-semibold mb-2">Nombre</p>

                            <div className="flex gap-4">
                                <p
                                    className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
                                >
                                </p>
                            </div>
                        </div>
                        <div className="mt-2">
                            <p className="text-md font-semibold mb-2">Administrador</p>
                            <div className="flex gap-4">
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-5 border-t-1 border-color">
                        </div>
                        <div className="mt-2">
                            <p className="text-md font-semibold mb-2">Miembros</p>
                            <div className="flex gap-4">
                            </div>
                            <div className="flex justify-between items-center mt-5 border-t-1 border-color">
                            </div>
                        </div>
                    </div>

                    <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
                        <div className="flex justify-between">
                            <p className="text-xl font-semibold">Estadísticas de Equipo</p>
                            <button type="button" className="text-xl font-semibold text-gray-500">
                                <IoIosMore />
                            </button>
                        </div>

                        <div className="mt-10 ">

                            <div className="flex justify-between mt-4 w-full">
                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                                    >

                                    </button>
                                    <div>
                                        <p className="text-md font-semibold"></p>
                                        <p className="text-sm text-gray-400"></p>
                                    </div>
                                </div>

                                {/* <p className={`text-${item.pcColor}`}>{item.amount}</p> */}
                            </div>
                            <div className="mt-4">
                            </div>
                        </div>

                    </div>
                    <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
                        <div className="flex justify-between">
                            <p className="text-xl font-semibold">Equipo</p>
                            <button type="button" className="text-xl font-semibold text-gray-500">
                                <IoIosMore />
                            </button>
                        </div>
                        <div className="mt-10">
                            <img
                                className="md:w-96 h-50 "
                                alt=""
                            />
                            <div className="mt-8">
                                <p className="font-semibold text-lg"></p>
                                <p className="text-gray-400 "></p>
                                <p className="mt-8 text-sm text-gray-400">
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}