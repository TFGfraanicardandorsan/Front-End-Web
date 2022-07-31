import React from "react";
import { Box, Flex, Text, Spacer, Tag } from "@chakra-ui/react";
import { HiCalendar, HiClock } from "react-icons/hi";
import { useStateContext } from "../contents/ContextProvider";
import Navbar from './Navbar';

const Inicio = () => {
    return (
        <>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <Navbar />
            </div>
            <div className="mt-12">
                <div className="flex flex-wrap lg:flex-nowrap justify-center">
                    
                    <img src="../src/assets/banner.jpg" alt="logo" ></img>
                </div>
            </div>
        </>
    )
}
export default Inicio