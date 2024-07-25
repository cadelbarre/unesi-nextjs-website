import HeaderLinks from './navlinks'
import Banner from './banner'
import Container from '../share/container'
import NavLogo from './navlogo'

export default function Header (): JSX.Element {
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
            <button data-collapse-toggle='navbar-sticky' type='button' className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='navbar-sticky' aria-expanded='false'>
              <span className='sr-only'>Abrir Menú</span>
              <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
              </svg>
            </button>
          </div>
          <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id='navbar-sticky'>
            <HeaderLinks />
          </div>
        </Container>
      </nav>
    </>

  )
}
