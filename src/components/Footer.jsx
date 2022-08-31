import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => (
    <>
        <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 " />
        <footer className="p-2 bg-white sm:p-6 dark:bg-yellow">
            <div className="sm:flex sm:items-center sm:justify-center">
                <a href="#" className="flex items-center ">
                    <img src={logo} className="ml-2 h-8" alt="T-Planifica Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">T-Planifica</span>
                </a>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ml-20 ">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Sobre Nosotros</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <Link to='/nosotros' >
                                    <a className="hover:underline">¿Quiénes somos?</a>
                                </Link>
                            </li>
                            <li className="mb-4">
                                <a href="mailto:tplanifica.sa@gmail.com" className="hover:underline">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Aviso de privacidad</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <Link to='/cookies' >
                                    <a className="hover:underline ">Cookies</a>
                                </Link>
                            </li>
                            <li>
                                <Link to='/condiciones' >
                                    <a className="hover:underline">Términos y Condiciones</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Descarga</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Android</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-center">
                <span className="text-xl text-black sm:text-center dark:text-black">© 2022 <a href="/" className="hover:underline">T-Planifica</a>.
                </span>
            </div>
        </footer>
    </>
);

export default Footer;