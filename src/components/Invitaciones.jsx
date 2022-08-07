import React, { useEffect, useState } from "react";
import { useStateContext } from '../contents/ContextProvider';
import { MdOutlineCancel } from 'react-icons/md';
import { FiUserPlus } from 'react-icons/fi';
import Button from './Button';
import { Box } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import * as API from '../services/invitaciones'

const Invitaciones = () => {

  const [invitaciones, setInvitaciones] = useState([]);

  useEffect(() => {
    API.getMisInvitaciones().then(setInvitaciones);
  }, []);

  const { currentColor } = useStateContext();

  return (
    <>
      <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
        <div className="flex justify-between items-center">
          <Link to='/nuevainvitacion' >
            <font size="6">< FiUserPlus /></font>
          </Link>
          <div className="flex gap-3">
            <p className="font-bold text-xl dark:text-gray-200">Invitaciones</p>
          </div>
          <Button icon={<MdOutlineCancel />} color="rgb(153, 171, 180)" bgHoverColor="light-gray" size="2xl" borderRadius="50%" />
        </div>
        <div>
          {invitaciones.map((invitacion) => (
            < Box
              key={invitacion.id}
              bg="yellow.200"
              p={4}
              m={4}
              borderRadius="lg"
            >
              <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> Nombre: {invitacion.invitado.nombre} </p>
              <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> Equipo: {invitacion.equipo.nombre} </p>
              <p className="font-semibold text-xl dark:text-gray-200"> Estado: {invitacion.estado} </p>
            </Box>
          ))}
        </div>
        <div className="mt-5">
          <Link to='/invitaciones' >
            <Button color="white"
              bgColor={currentColor}
              text="Ver todas las invitaciones"
              borderRadius="10px" width="full"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Invitaciones;