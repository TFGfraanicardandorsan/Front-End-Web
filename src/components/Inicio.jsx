import React from "react";
import {Box, Flex, Text, Spacer, Tag } from "@chakra-ui/react";
import {HiCalendar, HiClock } from "react-icons/hi";
import { useStateContext } from "../contents/ContextProvider";

const Inicio = () => {
    return (
        <div className="mt-12">
            <div className="flex flex-wrap lg:flex-nowrap justify-center">
                <h1>INICIO</h1>
                <img src="../src/assets/banner.jpg" alt="logo" ></img>
            </div>
            </div>
    )
}
export default Inicio