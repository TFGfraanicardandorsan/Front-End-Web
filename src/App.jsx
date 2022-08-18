import React, { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import { Tareas } from './components/Tareas';
import { CrearTarea } from './components/CrearTarea';
import { Navbar, Footer, Sidebar } from './components';
import CookieConsent from 'react-cookie-consent';
import { UserContextProvider } from './contents/UserContext';
import { useStateContext } from './contents/ContextProvider';
import { Login } from './components/Login';
import { Equipos } from './components/Equipos';
import { CrearEquipo } from './components/CrearEquipo';
import { MisEquipos } from './components/MisEquipos';
import { Registro } from './components/Registro';
import { MisTareas } from './components/MisTareas';
import { MisInvitaciones } from './components/MisInvitaciones';
import { CrearInvitacion } from './components/CrearInvitacion';
import { Inicio } from './components/Inicio';
import { ActualizarPerfil } from './components/ActualizarPerfil'
import { Presentacion } from './components/Presentacion';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = window.sessionStorage.getItem('jwt');
  if (!isAuthenticated) {
    return <Navigate to='/login' />
  }
  return children
}

export function App() {
  const { setCurrentColor, currentColor, activeMenu } = useStateContext();

  return (
    <UserContextProvider>
      <div>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            {/* <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: 'black', borderRadius: '50%' }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray">
              <FiSettings />
            </button> */}
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

            <div>
              <CookieConsent
                // debug={true}
                buttonText="Acepto"
              >
                Este sitio usa cookies. Puedes ver nuestra <a href='/privacy'> <strong><u>política de privacidad</u></strong></a> para más</CookieConsent>

              <Routes>
                <Route path="/" element={<Presentacion />} />
                <Route path="/inicio" element={<ProtectedRoute><Inicio /></ProtectedRoute>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registro />} />
                <Route path="/actualizarPerfil" element={<ProtectedRoute><ActualizarPerfil /></ProtectedRoute>} />

                {/* Tareas */}
                <Route path="/tareas" element={<ProtectedRoute> <Tareas /> </ProtectedRoute>} />
                <Route path="/mistareas" element={<ProtectedRoute> <MisTareas /> </ProtectedRoute>} />
                <Route path="/nuevaTarea" element={<ProtectedRoute><CrearTarea /></ProtectedRoute>} />

                {/* Equipos */}
                <Route path="/equipos" element={<ProtectedRoute><Equipos /></ProtectedRoute>} />
                <Route path="/misEquipos" element={<ProtectedRoute><MisEquipos /></ProtectedRoute>} />
                <Route path="/nuevoEquipo" element={<ProtectedRoute><CrearEquipo /></ProtectedRoute>} />

                {/* Invitaciones */}
                <Route path="/invitaciones" element={<ProtectedRoute><MisInvitaciones /></ProtectedRoute>} />
                <Route path="/nuevainvitacion" element={<ProtectedRoute><CrearInvitacion /></ProtectedRoute>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </UserContextProvider>
  )
}