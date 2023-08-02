import HeaderLinks from './header-link'
import HeaderWidget from './header-widget'

export default function Header (): JSX.Element {
  return (
    <>
      <HeaderWidget />
      <nav className='bg-white relative w-full z-20 top-0 left-0 border-b border-gray-200'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <a href='/' className='flex items-center cursor-pointer'>
            <img src='/logos/unesi-logo-color.png' className='h-12 md:h-24' alt='unesi Logo color' />
          </a>
          <div className='flex md:order-2'>
            <a href='https://api.whatsapp.com/send?phone=573152618695&amp;text=Hola quisiera mayor información...' target='_blank' className='text-white bg-primary hover:bg-primary-black focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-3 sm:px-6 sm:py-3 text-center mr-3 md:mr-0' rel='noreferrer'>Solicitar Cita</a>
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
        </div>
      </nav>
    </>

  )
}
