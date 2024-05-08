import Container from './share/container'
import FooterLink from './footer-links'

export default function Footer (): JSX.Element {
  return (
    <footer className='bg-gray-900 pt-16 md:pt-24 pb-8 font-medium'>
      <Container className='flex flex-col gap-24 '>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

          <div className='space-y-6'>
            <img src='/logos/unesi-logo-bw.png' alt='logo unesi monocrómatico' className='aspect-auto h-20' loading='lazy' />
            <p className='text-sm text-gray-300 leading-6'>Somos una organización conformada por un grupo de profesionales de la salud certificados a nivel nacional e internacional en el área de neurocirugía y neurocirugía intervencionista</p>
            <div className='text-gray-300 flex'>
              <a href='https://www.instagram.com/unesiltda/' target='_blank' className='transition duration-500 ease-in-out scale-100 hover:scale-110 hover:text-white' rel='noreferrer'>
                <svg width='24px' height='24px' strokeWidth='1.5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' color='currentColor'><path d='M12 16a4 4 0 100-8 4 4 0 000 8z' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' /><path d='M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z' stroke='currentColor' strokeWidth='1.5' /><path d='M17.5 6.51l.01-.011' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' /></svg>
              </a>
            </div>
          </div>

          <FooterLink />
        </div>

        <div className='pt-8 border-t border-t-white border-opacity-10'>
          <p className='text-sm text-gray-400'>Diseñado y hospedado por <a href='https://www.effortiaweb.com' target='_blank' className='text-gray-100 font-bold' rel='noreferrer'>Effortia Web</a></p>
        </div>
      </Container>
    </footer>
  )
}
