'use client'
import CountUp from 'react-countup'
import Container from '../share/container'

export default function Indicators (): JSX.Element {
  const experienceYear = new Date().getFullYear() - 2000

  return (
    <section className='w-full relative pt-12 lg:pt-18 px-6'>
      <Container className='py-16 bg-primary-black rounded-xl bg-[url(/images/overlay-indicators.webp)]'>
        <dl className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 first:[&>div]:border-0 md:[&>div]:border-l [&>div]:border-gray-100/40 mt-2 text-white'>
          <div className='sm:pl-6 flex flex-col space-y-2 text-center'>
            <dt className='text-4xl md:text-6xl font-extrabold'>
              +<CountUp end={8000} duration={5} enableScrollSpy scrollSpyOnce />
            </dt>
            <dd className=''>Pacientes Atendidos</dd>
          </div>
          <div className='sm:pl-6 flex flex-col space-y-2 text-center'>
            <dt className='text-4xl  md:text-6xl font-extrabold'>
              <CountUp end={experienceYear} duration={5} enableScrollSpy scrollSpyOnce />
            </dt>
            <dd className=''>Años de Experiencia</dd>
          </div>
          <div className='sm:pl-6 flex flex-col space-y-2 text-center'>
            <dt className='text-4xl  md:text-6xl font-extrabold'>
              +<CountUp end={12500} duration={5} enableScrollSpy scrollSpyOnce />
            </dt>
            <dd className=''>Procedimientos Realizados</dd>
          </div>
          <div className='sm:pl-6 flex flex-col space-y-2 text-center'>
            <dt className='text-4xl  md:text-6xl font-extrabold'>
              <CountUp end={23} duration={5} enableScrollSpy scrollSpyOnce />
            </dt>
            <dd className=''>Convenios con Clinicas</dd>
          </div>
        </dl>
      </Container>
    </section>
  )
}
