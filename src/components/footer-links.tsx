import Link from 'next/link'

export default function FooterLink (): JSX.Element {
  return (
    <div className='col-span-2 '>
      <div className='grid grid.cols-1 md:grid-cols-3 gap-16 md:gap-8 '>

        <div className='text-sm ml-6'>
          <h3 className='text-lg font-bold leading-7 text-white'>Accesos Rapidos</h3>
          <ul className='flex flex-col gap-y-2 mt-6 text-gray-300 space-y-3'>
            <li className='hover:text-white hover:translate-x-1 transition duration-300 ease-in-out'>
              <Link href='/nosotros'>Quienes Somos</Link>
            </li>
            <li className='hover:text-white hover:translate-x-1 transition duration-300 ease-in-out'>
              <Link href='/nosotros/politicas-de-calidad'>Póliticas de Calidad</Link>
            </li>
            <li className='hover:text-white hover:translate-x-1 transition duration-300 ease-in-out'>
              <Link href='/nosotros/derechos-y-deberes'>Derechos y Deberes</Link>
            </li>
            <li className='hover:text-white hover:translate-x-1 transition duration-300 ease-in-out'>
              <Link href='/nosotros/valores-corporativos'>Valores Corporativos</Link>
            </li>
          </ul>
        </div>

        <div className=' text-sm -ml-6'>
          <h3 className='text-lg font-bold leading-7 text-white'>Donde Estamos</h3>
          <ul className='flex flex-col gap-y-2 mt-6 text-gray-300 space-y-3'>
            <li className='flex gap-x-3 leading-6'>
              <svg width='20px' height='20px' strokeWidth='1.5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' color='currentColor'><path d='M20 10c0 4.418-8 12-8 12s-8-7.582-8-12a8 8 0 1116 0z' stroke='currentColor' strokeWidth='1.5' /><path d='M12 11a1 1 0 100-2 1 1 0 000 2z' fill='currentColor' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' className='flex-grow' /></svg>
              <span className='w-full h-full text-balance'>Edificio Continental Medical Center. Carrera 49C # 80 -
                125, Consultorio 506. Barranquilla, Colombia.
              </span>
            </li>
            <li className='flex gap-x-3 leading-6'>
              <svg width='20px' height='20px' strokeWidth='1.5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' color='currentColor'><path d='M18.118 14.702L14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047.42 2.783 1.66 7.83 5.283 11.453 3.805 3.805 9.286 5.456 12.302 6.113 1.165.253 2.198-.655 2.198-1.848v-3.584l-3.882-1.479z' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' /></svg>
              <span className='text-balance'>(605) 391 2675 - (605) 315 261 6685.</span>
            </li>
            <li className='flex gap-x-3 leading-6'>
              <svg width='20px' height='20px' strokeWidth='1.5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' color='currentColor'><path d='M7 12l5 3.5 5-3.5' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' /><path d='M2 20V9.132a2 2 0 01.971-1.715l8-4.8a2 2 0 012.058 0l8 4.8A2 2 0 0122 9.132V20a2 2 0 01-2 2H4a2 2 0 01-2-2z' stroke='currentColor' strokeWidth='1.5' /></svg>
              <span>unesi2007@hotmail.com</span>
            </li>
          </ul>
        </div>

        <div className='text-white'>
          <h3 className='text-lg font-bold leading-7 text-white'>Horario</h3>
          <p>Lunes - Viernes</p>
        </div>

      </div>
    </div>
  )
}
