import Container from '@/components/share/container'
import PageTitle from '@/components/share/page-title'

import * as valores from './valores-info.json'
import Indicators from '@/components/home/indicators'
import { Honesty, Lock, Oportunity, Quality, SatisfiedUser, UserDoctor } from '@/components/share/icons'

const ICON_COMPONENTS = {
  lock: <Lock />,
  userDoctor: <UserDoctor />,
  satisfiedUser: <SatisfiedUser />,
  honesty: <Honesty />,
  quality: <Quality />,
  oportunity: <Oportunity />,
  default: <svg width='26px' height='26px' viewBox='0 0 24 24' strokeWidth='2' fill='none' xmlns='http://www.w3.org/2000/svg' color='currentColor'><path d='M7 14a3 3 0 101 5.83M4.264 15.605a4 4 0 01-.874-6.636M3.42 8.888A2.5 2.5 0 017 5.5M12 4.5a2.5 2.5 0 10-4.762 1.065M8 20a2 2 0 104 0M17 14a3 3 0 11-1 5.83M19.736 15.605a4 4 0 00.874-6.636M20.58 8.888A2.5 2.5 0 0017 5.5M12 4.5a2.5 2.5 0 114.762 1.065M16 20a2 2 0 11-4 0M12 8v4M12 16.01l.01-.011' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' /></svg>
}

export default function ValoresCorporativos (): JSX.Element {
  return (
    <>
      <PageTitle title='Valores Corporativos' />
      <Container className='py-16 md:py-24 grid place-items-center bg-white'>
        <div className='mx-auto max-w-7xl px-0 md:px-6 lg:px-8'>

          <div className='mx-auto mt-8 sm:mt-16 max-w-2xl lg:max-w-4xl'>
            <div className='h-60 aspect-auto mb-12 sm:mb-20 lg:mb-24 rounded-lg shadow-lg shadow-primary/20'>
              <img src='/images/valores-corporativos.avif' alt='' className=' object-cover h-full w-full object-top rounded-lg' />
            </div>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
              {
                  valores.valoresCorporativos.map(valor => {
                    return (
                      <div className='relative pl-16' key={valor.title}>
                        <dt className='text-lg font-semibold leading-7 text-gray-900'>
                          <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white'>
                            {ICON_COMPONENTS[valor.icon as keyof typeof ICON_COMPONENTS] ?? ICON_COMPONENTS.default}
                          </div>
                          {valor.title}
                        </dt>
                        <dd className='mt-2 text-base leading-7 text-gray-800 text-balance'>{valor.message}</dd>
                      </div>
                    )
                  })
                }

            </dl>
          </div>
        </div>
      </Container>
      <Indicators />
    </>
  )
}
