'use client'
import Link from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { CaretDownIcon } from '@radix-ui/react-icons'

export default function HeaderLinks (): JSX.Element {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-2 md:mt-0 md:border-0 md:bg-white '>

        <NavigationMenu.Item>
          <NavigationMenu.Link className='flex items-center py-2 px-4 rounded-lg hover:bg-gray-50' href='/'>
            Inicio
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className='flex items-center py-2 px-4 rounded-lg hover:bg-gray-50 '>
            Nosotros <CaretDownIcon className='ml-1' aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className='relative'>
            <ul className='absolute bg-white shadow-lg rounded-lg w-56 border-t-4 border-primary-black py-3'>
              <Link href='/nosotros' className='block text-gray-700 rounded font-normal hover:text-primary-black px-5 py-3'>Quienes Somos</Link>
              <Link href='/nosotros/valores-corporativos' className='block text-gray-700 rounded font-normal hover:text-primary-black px-5 py-3'>Valores Corporativos</Link>
              <Link href='/nosotros/politicas-de-calidad' className='block text-gray-700 rounded font-normal hover:text-primary-black px-5 py-3'>Políticas de Calidad</Link>
              <Link href='/nosotros/derechos-y-deberes' className='block text-gray-700 rounded font-normal hover:text-primary-black px-5 py-3'>Derechos y Deberes</Link>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {/* <NavigationMenu.Item>
          <NavigationMenu.Link className='flex items-center py-2 px-4 rounded-lg hover:bg-gray-50' href='/preguntas-frecuentes'>
            Preguntas Frecuentes
          </NavigationMenu.Link>
        </NavigationMenu.Item> */}

        <NavigationMenu.Item>
          <NavigationMenu.Link className='flex items-center py-2 px-4 rounded-lg hover:bg-gray-50' href='/contacto'>
            Contacto
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className='NavigationMenuIndicator'>
          <div className='Arrow' />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className='ViewportPosition'>
        <NavigationMenu.Viewport className='NavigationMenuViewport' />
      </div>
    </NavigationMenu.Root>
  )
}
