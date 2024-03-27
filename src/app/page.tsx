'use client'
import Doctor from '@/components/home/doctor'
import Indicators from '@/components/home/indicators'
import Slider from '@/components/home/slider'
import Team from '@/components/home/team'
import Welcome from '@/components/home/welcome'
import Container from '@/components/share/container'
import Marquee from '@/components/share/marquee'
import Testimonials from '@/components/share/testimonials'

import CountUp from 'react-countup'

export default function Home (): JSX.Element {
  const experienceYear = new Date().getFullYear() - 2000

  return (
    <>
      <Slider />
      <Welcome />
      <Doctor />
      <Marquee />
      <Team />
      {/* <Indicators /> */}
      <Container className='py-24 bg-primary-black rounded-xl'>
        <dl className='grid grid-cols-2 md:grid-cols-4 gap-8 first:[&>div]:border-0 [&>div]:border-l [&>div]:border-gray-50 [&>div]:border-opacity-20 mt-8 text-white'>
          <div className='pl-6 flex flex-col space-y-2 text-center'>
            <dt className='text-4xl md:text-6xl font-extrabold'>
              +<CountUp end={8000} duration={5} enableScrollSpy scrollSpyOnce />
            </dt>
            <dd className=''>Pacientes Atendidos</dd>
          </div>
          <div className='pl-6 flex flex-col space-y-2 text-center'>
            <dt className='text-4xl  md:text-6xl font-extrabold'>
              <CountUp end={experienceYear} duration={5} enableScrollSpy scrollSpyOnce />
            </dt>
            <dd className=''>Años de Experiencia</dd>
          </div>
          <div className='pl-6 flex flex-col space-y-2 text-center'>
            <dt className='text-4xl  md:text-6xl font-extrabold'>
              +<CountUp end={12500} duration={5} enableScrollSpy scrollSpyOnce />
            </dt>
            <dd className=''>Procedimientos Realizados</dd>
          </div>
          <div className='pl-6 flex flex-col space-y-2 text-center'>
            <dt className='text-4xl  md:text-6xl font-extrabold'>
              <CountUp end={23} duration={5} enableScrollSpy scrollSpyOnce />
            </dt>
            <dd className=''>Convenios con Clinicas</dd>
          </div>
        </dl>
      </Container>
      <Testimonials />
    </>
  )
}
