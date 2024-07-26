'use client'
import { useState } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

import HeaderLinks from './navlinks'
import Banner from './banner'
import Container from '../share/container'
import NavLogo from './navlogo'

export default function Header (): JSX.Element {
  const [showNavBar, setShowNavBar] = useState(false)

  const toggleNavbar = (): void => setShowNavBar(!showNavBar)

  return (
    <>
      <Banner />
      <nav className='bg-white relative w-full z-20 top-0 left-0 border-b border-gray-200'>
        <Container className='flex flex-wrap items-center justify-between mx-auto p-4'>
          <NavLogo />
          <div className='flex md:order-2'>
            <a href='https://unesi.softwaremedico.com.co/citas_online_interesado' target='_blank' className='text-white bg-primary hover:bg-primary-black focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-3 sm:px-6 sm:py-3 text-center mr-3 md:mr-0 transition-colors duration-200 ease-in' rel='noreferrer'>
              Solicitar Cita
            </a>
            <button data-collapse-toggle='navbar-sticky' type='button' className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='navbar-sticky' aria-expanded='false' onClick={toggleNavbar}>
              <span className='sr-only'>Abrir Menú</span>
              <svg className='w-5 h-5' aria-hidden='true' fill='none' viewBox='0 0 17 14'>
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
              </svg>
            </button>

            <NavigationMenu.Root orientation='vertical' className={`rounded-lg bg-white shadow-lg border-b-4 border-primary-black md:hidden absolute w-[100dvw] top-16 left-0 ${showNavBar ? 'block' : 'hidden'}`}>
              <NavigationMenu.List className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-2 md:mt-0 md:border-0 md:bg-white '>

                <NavigationMenu.Item>
                  <NavigationMenu.Link className='flex items-center py-2 px-4 rounded-lg hover:bg-gray-50' href='/' onClick={toggleNavbar}>
                    Inicio
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link className='flex items-center py-2 px-4 rounded-lg hover:bg-gray-50' href='/nosotros' onClick={toggleNavbar}>
                    Quienes Somos
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link className='flex items-center py-2 px-4 rounded-lg hover:bg-gray-50' href='/nosotros/valores-corporativos' onClick={toggleNavbar}>
                    Valores Corporativos
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link className='flex items-center py-2 px-4 rounded-lg hover:bg-gray-50' href='/nosotros/politicas-de-calidad' onClick={toggleNavbar}>
                    Políticas de Calidad
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link className='flex items-center py-2 px-4 rounded-lg hover:bg-gray-50' href='/nosotros/derechos-y-deberes' onClick={toggleNavbar}>
                    Derechos y Deberes
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link className='flex items-center py-2 px-4 rounded-lg hover:bg-gray-50' href='/contacto' onClick={toggleNavbar}>
                    Contacto
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

              </NavigationMenu.List>
            </NavigationMenu.Root>
          </div>
          <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id='navbar-sticky'>
            <HeaderLinks />
          </div>
        </Container>
      </nav>
    </>

  )
}
