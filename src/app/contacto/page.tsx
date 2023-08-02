'use client'
import { Toaster } from 'sonner'

import FormContac from '@/components/contacto/form-contact'
import Container from '@/components/share/container'
import PageTitle from '@/components/share/page-title'

export default function Contacto (): JSX.Element {
  return (
    <>
      <Toaster position='top-center' richColors />
      <PageTitle title='Contacto' />
      <Container className='py-16 sm:py-24 grid place-items-center'>
        <header className='mb-6 text-center flex flex-col justify-center items-center max-w-[42rem] mx-auto'>
          <h2 className='text-4xl sm:text-5xl font-bold pb-4 text-primary'>Contacto</h2>
          <p className='text-base sm:text-lg mt-1'>Si tiene alguna pregunta, llámenos o complete el siguiente formulario y nos pondremos en contacto con usted muy pronto.</p>
        </header>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-16 mt-10 sm:mt-20'>
          <FormContac />
          <div className='col-span-1 space-y-8 text-gray-800'>
            <dl className='[&>dt]:font-semibold [&>dt]:text-lg [&>dt]:mt-6 [&>dt]:mb-1'>
              <dt> Edificio Medico Continental</dt>
              <dd>Carrera 49C # 80 - 125, Conusltorio 506.</dd>

              <dt>Medios de Comunicación</dt>
              <dd className='flex flex-col'>
                <span>Teléfonos: (605) 391 2675</span>
                <span>Celular: 315 261 6685</span>
              </dd>

              <dt>Correo Electrónico</dt>
              <dd>unesi2007@hotmail.com</dd>
            </dl>

            <div className='text-gray-700 flex rounde-full'>
              <a href='https://www.instagram.com/unesiltda/' target='_blank' className='transition duration-500 ease-in-out scale-100 hover:scale-110 p-1' rel='noreferrer'>
                <svg width='24px' height='24px' strokeWidth='1.5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' color='currentColor'><path d='M12 16a4 4 0 100-8 4 4 0 000 8z' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' /><path d='M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z' stroke='currentColor' strokeWidth='1.5' /><path d='M17.5 6.51l.01-.011' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' /></svg>
              </a>
            </div>
          </div>
        </div>

      </Container>

      <div className='w-full bg-gray-300 max-h-[20rem] relative'>
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4989471234726!2d-74.81713022523151!3d11.001141889161579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d911a5e8743%3A0x9a0c499ae4c390b5!2sLaboratorio%20Cl%C3%ADnico%20Continental!5e0!3m2!1ses!2sco!4v1690923397474!5m2!1ses!2sco' width='1200' style={{ border: 0 }} loading='lazy' referrerPolicy='no-referrer-when-downgrade' className='h-96 w-full' />
      </div>
    </>
  )
}
