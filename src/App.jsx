import React, { useState,useEffect } from 'react'
import './App.css'
import { Routes,Route, Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { Tareas } from './components/Tareas';
import { CrearTarea } from './components/CrearTarea';
import { Navbar,Footer,Sidebar, Inicio } from './components';
import { useStateContext } from './contents/ContextProvider';
import { Login } from './components/Login';

export function App() {
  const{ activeMenu }= useStateContext();
  return (
    <div>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: 'black', borderRadius: '50%' }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray">
              <FiSettings />
            </button>
        </div>
        {activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
            <Sidebar />
          </div>
        ) : (
          <div className='w-0 dark:bg-secondary-dark-bg'>
            <Sidebar />
          </div>
        )}
        <div className={
          `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
          }>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>

        <div>
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path = "/login" element = {<Login/>} />

            {/* Tareas */}
            <Route path="/tareas" element={<Tareas/>} />
            <Route path="/mistareas" element="MisTareas" />
            <Route path="/nuevaTarea" element={<CrearTarea />} />

            {/* Equipos */}
            <Route path="/equipos" element="Equipos" />
            <Route path="/miequipo" element="Miequipo" />
          </Routes>
          </div>
        </div>
        </div>
    </div>
)
}