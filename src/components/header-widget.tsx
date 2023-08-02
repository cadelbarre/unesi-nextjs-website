import { Mail, Pin, Phone } from '@/components/share/icons'
import Container from './share/container'

export default function HeaderWidget (): JSX.Element {
  return (
    <section className='bg-primary max-w-screen  p-4 text-sm tracking-wide hidden md:block '>
      <Container>
        <ul className='text-white font-medium flex flex-wrap items-center justify-between [&>li]:flex gap-y-2 [&>li]:gap-x-2 [&>li]:flex-row [&>li]:items-center [&>li]:justify-center'>
          <li className='text-balance'>
            <Pin /> Edificio Continental Medical Center - Carrera 49C # 80 - 125, Consultorio 506. Barranquilla, Colombia
          </li>
          <li><Phone /><a href='tel:+6053152618695'> (605) 3912675 - (605) 315 261-8695</a></li>
          <li><Mail /> <a href='mailto:info@unesi.com.co'>info@unesi.com.co</a> </li>
        </ul>
      </Container>
    </section>
  )
}
