import { Mail, Pin, Phone } from '@/components/share/icons'
import Container from '@/components/share/container'
import unesi from '@/assets/empresa'

export default function Banner (): JSX.Element {
  const { email, telefonos, ubicacion } = unesi

  const cellphone = telefonos.split(' - ')[1] // get only the cellphone
  const justNumber = cellphone.replace(/[-\s()]/g, '') // remove space, - and ()
  const phoneToCall = justNumber.padStart(14, '+') // add + at the begining

  return (
    <section className='bg-primary-black max-w-screen p-3 text-sm tracking-wide hidden md:block '>
      <Container>
        <ul className='text-white text-sm font-medium flex flex-wrap items-center justify-between [&>li]:flex gap-y-2 [&>li]:gap-x-2 [&>li]:flex-row [&>li]:items-center [&>li]:justify-center'>
          <li className='text-balance'>
            <Pin />
            {ubicacion.direccion}
          </li>
          <li>
            <Phone />
            <a href={`tel:${phoneToCall}`}>{telefonos}</a>
          </li>
          <li>
            <Mail />
            <a href={`mailto:${email}`}>{email}</a>
          </li>
        </ul>
      </Container>
    </section>
  )
}
