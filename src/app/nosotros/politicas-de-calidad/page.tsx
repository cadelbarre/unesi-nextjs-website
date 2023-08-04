import Container from '@/components/share/container'
import PageTitle from '@/components/share/page-title'

import * as info from './politicas.json'

export default function PoliticasCalidad (): JSX.Element {
  return (
    <>
      <PageTitle title='Políticas de Calidad' />
      <Container className='py-16 md:py-24 grid place-items-center bg-white'>
        <div className='mx-auto max-w-7xl px-0 md:px-6 lg:px-8'>

          <header className='mb-6 text-center flex flex-col justify-center items-center max-w-[42rem] mx-auto'>
            <h2 className='text-4xl md:text-5xl font-bold pb-4 text-primary'>Políticas de Calidad</h2>
          </header>

          <div className='mx-auto mt-8 sm:mt-16 max-w-2xl lg:max-w-4xl'>
            <div className='h-60 aspect-auto mb-12 sm:mb-20 lg:mb-24 rounded-lg shadow-lg shadow-primary/20'>
              <img src='/images/politica_de_calidad.webp' alt='imagen politica de calidad' loading='lazy' className=' object-cover h-full w-full object-bottom rounded-lg' />
            </div>
            <p className='mb-12'>Nuestro grupo de profesionales brinda atención médica especializada por medio de procedimientos de neurocirugia y neurocirugia intervencionista, encaminados hacia el bienestar y satisfacción de los pacientes que acuden a las instituciones prestadoras de salud con las cuales tenemos convenio de servicio y a los pacientes que llegan a nuestro consultorio, respaldados en la trayectoria y experiencia de nuestros médicos, quienes cuentan con excelente reconocimiento y confianza en el mundo, gracias a la certificación nacional e internacional de los estudios realizados plenamente corroborables</p>

            <dl className='grid max-w-xl grid-cols-1 gap-x-14 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
              {
                info.politicas.map(politica => {
                  return (
                    <div className='relative' key={politica.title}>
                      <dt className='text-lg font-semibold leading-7 text-gray-900'>
                        {politica.title}
                      </dt>
                      <dd className='mt-2 text-base leading-7 text-gray-800 text-balance'>{politica.description}</dd>
                    </div>
                  )
                })
              }
            </dl>
          </div>
        </div>
      </Container>
    </>
  )
}
