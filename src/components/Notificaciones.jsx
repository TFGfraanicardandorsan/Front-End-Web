import React, { useEffect, useState } from "react";
import { useStateContext } from '../contents/ContextProvider';
import { MdOutlineCancel, MdOutlineAutoDelete } from 'react-icons/md';
import Button from './Button';
import { Box } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import * as API from '../services/notificaciones'

const Notificaciones = () => {

  const API_URL = 'https://t-planifica.herokuapp.com'
  const { currentColor } = useStateContext();
  const [notificaciones, setNotificaciones] = useState([]);

  useEffect(() => {
    API.getMisNotificaciones().then(setNotificaciones);
  }, []);

  function borrarNotificacion(id) {
    fetch(`${API_URL}/borrarNotificacion/` + id, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      }
    }).then(() => {
      console.log('Borrar notificacion');
      getData();
    })
  }

  async function getData() {
    const jwt = window.sessionStorage.getItem('jwt');
    const myHeader = new Headers({
      "Authorization": `Bearer ${jwt}`
    });

    const myInit = {
      method: 'GET',
      headers: myHeader,
      mode: 'cors',
      cache: 'default'
    };

    const myRequest = new Request(`${API_URL}/misNotificaciones`, myInit);
    try {
      let response = await fetch(myRequest)
      response = await response.json();
      setNotificaciones(response);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <>
      <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <p className="font-semibold text-lg dark:text-gray-200">Notificaciones</p>
          </div>
          <Button icon={<MdOutlineCancel />} color="rgb(153, 171, 180)" bgHoverColor="light-gray" size="2xl" borderRadius="50%" />
        </div>
        <div>
          {notificaciones.map((notificacion) => (
            < Box
              key={notificacion.id}
              bg="yellow.200"
              p={4}
              m={4}
              borderRadius="lg"
            >
              <p className="font-semibold text-xl dark:text-gray-200"> Estado: {notificacion.estadoNotificacion} </p>
              <p className="font-semibold text-xl dark:text-gray-200"> Mensaje: {notificacion.mensaje} </p>
              <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> Tipo: {notificacion.tipoNotificacion} </p>
              <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> Referencia: {notificacion.referencia} </p>
              
              <Button icon = {<MdOutlineAutoDelete />} color="rgb(255, 255, 255)"  size="2xl" borderRadius="50%" 
                onClick={() => borrarTarea(tarea.id)} >
                <font size="6"><MdOutlineAutoDelete /></font>
              </Button>

            </Box>
          ))}
        </div>
        <div className="mt-5">
          <Link to='/notificaciones' >
            <Button color="white"
              bgColor={currentColor}
              text="Ver todas las notificaciones"
              borderRadius="10px" width="full"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Notificaciones;