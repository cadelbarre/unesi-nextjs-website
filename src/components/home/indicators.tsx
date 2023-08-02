'use client'
import CountUp from 'react-countup'
import Container from '../share/container'

export default function Indicators (): JSX.Element {
  const experienceYear = new Date().getFullYear() - 2000

  return (
    <section className='w-full relative'>
      <img src='/images/overlay-indicators.webp' alt='' className='w-full h-full -z-10 absolute object-cover inset-0 bg-blue-950' loading='lazy' />
      <Container className='py-16 md:pt-28 md:pb-28 flex flex-col gap-24 '>
        <dl className='grid grid-cols-2 md:grid-cols-4 gap-8 [&>div]:border-l [&>div]:border-gray-50 [&>div]:border-opacity-20 mt-8 text-white'>
          <div className='pl-6 flex flex-col space-y-2'>
            <dt className='text-4xl md:text-5xl font-bold'>
              +<CountUp end={8000} duration={5} enableScrollSpy scrollSpyOnce />
            </dt>
            <dd className=''>Pacientes Atendidos</dd>
          </div>
          <div className='pl-6 flex flex-col space-y-2'>
            <dt className='text-4xl md:text-5xl font-bold'>
              <CountUp end={experienceYear} duration={5} enableScrollSpy scrollSpyOnce />
            </dt>
            <dd className=''>Años de Experiencia</dd>
          </div>
          <div className='pl-6 flex flex-col space-y-2'>
            <dt className='text-4xl md:text-5xl font-bold'>
              +<CountUp end={12500} duration={5} enableScrollSpy scrollSpyOnce />
            </dt>
            <dd className=''>Procedimientos Realizados</dd>
          </div>
          <div className='pl-6 flex flex-col space-y-2'>
            <dt className='text-4xl md:text-5xl font-bold'>
              <CountUp end={23} duration={5} enableScrollSpy scrollSpyOnce />
            </dt>
            <dd className=''>Convenios con Clinicas</dd>
          </div>
        </dl>
      </Container>
    </section>
  )
}
