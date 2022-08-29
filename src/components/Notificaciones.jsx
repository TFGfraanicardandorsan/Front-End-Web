import React, { useEffect, useState } from "react";
import { useStateContext } from '../contents/ContextProvider';
import { MdOutlineCancel } from 'react-icons/md';
import Button from './Button';
import { Box } from "@chakra-ui/react"
import * as API from '../services/notificaciones'

const Notificaciones = () => {

  const API_URL = 'https://t-planifica.herokuapp.com'
  const { currentColor } = useStateContext();
  const [ data, setData ] = useState([]);
  const [notificaciones, setNotificaciones] = useState([]);

  useEffect(() => {
    API.getMisNotificaciones().then(setNotificaciones);
  }, []);

  async function ocultarNotificacion(id) {
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

    const myRequest = new Request(`${API_URL}/ocultarNotificacion/` + id, myInit);
    try {
      const response = await fetch(myRequest)
      getData();
      return await response.json();
    } catch (error) {
    }
  }

  // async function tareaId(id) {
  //   const jwt = window.sessionStorage.getItem('jwt');
  //   const myHeader = new Headers({
  //     "Authorization": `Bearer ${jwt}`
  //   });

  //   const myInit = {
  //     method: 'GET',
  //     headers: myHeader,
  //     mode: 'cors',
  //     cache: 'default'
  //   };

  //   const myRequest = new Request(`${API_URL}/tarea/` + id , myInit);
  //   try {
  //     await fetch(myRequest)
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setData(json);
  //       });
  //   } catch (error) {
  //   }
  // }

  async function tareaId(id) {
    try {
      const response = await fetch(`${API_URL}/tarea/` + id);
      const data = await response.json();
      console.log(data)
      setData(data)
      return data;
    } catch (error) {
      console.error(error);
    }
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
              <p className="font-semibold text-l dark:text-gray-200"> Mensaje: {notificacion.mensaje} </p>
              <p className="font-semibold text-l dark:text-gray-200"> Estado: {notificacion.estadoNotificacion} </p>
              <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> Tipo: {notificacion.tipoNotificacion} </p>

              {/* <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> Referencia: {console.log(tareaId(notificacion.referencia))}</p> */}

              <div className="flex space-x-2 justify-center">
                <button onClick={() => ocultarNotificacion(notificacion.id)}
                  type="button" className="inline-block px-6 py-2.5  text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white-600 hover:shadow-lg focus:bg-black-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out flex items-center">
                  Ocultar Notificación
                  <span className="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-yellow-200 text-black rounded ml-2"><font size="5"><MdOutlineCancel /></font></span>
                </button>
              </div>

            </Box>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notificaciones;