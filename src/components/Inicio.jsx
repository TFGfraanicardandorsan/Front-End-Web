import { useState, useEffect } from "react";
import { Box, Flex, Text, Spacer, Tag } from "@chakra-ui/react";
import { HiCalendar, HiClock } from "react-icons/hi";
import { useStateContext } from "../contents/ContextProvider";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import Navbar from './Navbar';
import Header from "./Header";
import * as API from "../services/tareas";


export function Inicio() {

    const API_URL = 'https://t-planifica.herokuapp.com'

    const [tareasHoy, setTareasHoy] = useState([]);
    const [tareasInacabadasHoy, setTareasInacabadasHoy] = useState([]);

    useEffect(() => {
        API.getTareasHoy().then(setTareasHoy);
    }, []);

    useEffect(() => {
        API.getTareasHoyInacabadas().then(setTareasInacabadasHoy);
    }, []);

    return (
        <>
            {/* <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <Header /> */}
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <Navbar />
            </div>
            <section>
                <CircularProgress value={1} color='yellow' max={tareasHoy.length} min={0}>
                    <CircularProgressLabel>{tareasHoy.length}</CircularProgressLabel>
                </CircularProgress>
            </section>
        </>
    )
}