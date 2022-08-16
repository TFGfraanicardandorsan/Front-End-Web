import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => (
    <>
    <hr class=" border-gray-200 sm:mx-auto dark:border-gray-700 " />
    <footer class="p-2 bg-white sm:p-6 dark:bg-yellow">
        <div class="sm:flex sm:items-center sm:justify-center">
            <a href="#" class="flex items-center ">
                <img src={ logo } class="ml-2 h-8" alt="T-Planifica Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">T-Planifica</span>
            </a>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ml-20 ">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Sobre Nosotros</h2>
                    <ul class="text-gray-600 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="#" class="hover:underline">¿Quiénes somos?</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Aviso de privacidad</h2>
                    <ul class="text-gray-600 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="#" class="hover:underline ">Cookies</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Términos y Condiciones</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Descarga</h2>
                    <ul class="text-gray-600 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Android</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-center">
            <span class="text-xl text-black sm:text-center dark:text-black">© 2022 <a href="#" class="hover:underline">T-Planifica</a>.
            </span>
        </div>
    </footer>
    </>
);

export default Footer;